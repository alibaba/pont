/**
 * @description 持久化接口变更记录。
 *
 * 设计思路
 *
 * 在 ~/.pont 下保存接口变更记录。每个项目（Project）占用一个目录。
 * 保存一份总的 manifest 的 JSON 文件。该文件包括所有项目的信息，始终和接口变更目录保持一致。方便做信息查询。
 *
 * 项目（Project）以用户的项目加 originUrl 两个字段来唯一确定。
 *
 * 生成报表使用 diffs 方法来分析变更信息。
 * @todo 报表渲染待优化
 */
import { execSync } from 'child_process';
import { StandardDataSource } from './standard';
import { diffDses } from './utils';
import { diff } from './diff';
import { PROJECTS_MANIFEST_FILE } from '../constants';
import { PontFileManager } from '../utils/PontFileManager';

/** @deprecated */
export class Record {
  saveTime = new Date();
  constructor(public filename: string) {}
}

interface IProject {
  projectName: string;
  originUrl: string;
  projectPath: string;
  records: Record[];
}

type IProjectParams = Omit<IProject, 'projectPath' | 'records'>;

interface ProjectsManifest {
  projects: IProject[];
}

/** @deprecated */
export class LocalDsManager {
  static getProjectsManifest(rootDir: string): ProjectsManifest {
    const manifestPath = PontFileManager.getLocalFilePath(rootDir, PROJECTS_MANIFEST_FILE);
    const content = PontFileManager.loadJson<ProjectsManifest>(manifestPath);

    if (!content) {
      const manifest: ProjectsManifest = { projects: [] };
      PontFileManager.writeJson(manifestPath, manifest);

      return manifest;
    }

    return content;
  }

  static saveManifest(rootDir: string, manifest: ProjectsManifest) {
    const manifestPath = PontFileManager.getLocalFilePath(rootDir, PROJECTS_MANIFEST_FILE);
    PontFileManager.writeJson(manifestPath, manifest);
  }

  static getProject(rootDir: string, filename: string): StandardDataSource {
    const projectPath = PontFileManager.getLocalFilePath(rootDir, filename);
    return PontFileManager.loadJson<StandardDataSource>(projectPath);
  }

  static saveProject(rootDir: string, filename: string, ds: StandardDataSource) {
    const projectPath = PontFileManager.getLocalFilePath(rootDir, filename);
    PontFileManager.writeJson(projectPath, ds);
  }

  static isProjectExists(rootDir: string, project: IProjectParams) {
    const projectsInfo = LocalDsManager.getProjectsManifest(rootDir);

    return projectsInfo.projects.find((proj) => {
      return proj.originUrl === project.originUrl && proj.projectName === project.projectName;
    });
  }

  /** 获取该项目最新的数据源 */
  static getLatestDsInProject(rootDir: string, project: IProjectParams): StandardDataSource {
    const manifest = LocalDsManager.getProjectsManifest(rootDir);
    const foundProj = manifest.projects.find(
      (proj) => proj.originUrl === project.originUrl && proj.projectName === project.projectName
    );

    if (foundProj && foundProj.records.length) {
      const record = foundProj.records[foundProj.records.length - 1];

      return LocalDsManager.getProject(rootDir, `${foundProj.projectPath}/${record.filename}`);
    }

    return null;
  }

  static appendRecord(rootDir: string, project: IProject, ds: StandardDataSource) {
    const filename = 'record_' + project.records.length;
    const manifest = LocalDsManager.getProjectsManifest(rootDir);

    const proj = manifest.projects.find((proj) => proj.projectPath === project.projectPath);
    proj.records.push(new Record(filename));

    LocalDsManager.saveProject(rootDir, `${project.projectPath}/${filename}`, ds);
    LocalDsManager.saveManifest(rootDir, manifest);
  }

  static createProject(rootDir: string, project: IProjectParams) {
    const manifest = LocalDsManager.getProjectsManifest(rootDir);
    const projectPath = 'project_' + manifest.projects.length;
    const proj: IProject = {
      projectName: project.projectName,
      originUrl: project.originUrl,
      records: [],
      projectPath
    };
    manifest.projects.push(proj);
    LocalDsManager.saveManifest(rootDir, manifest);

    return proj;
  }

  static saveDataSource(rootDir: string, project: IProjectParams, ds: StandardDataSource) {
    let proj = LocalDsManager.isProjectExists(rootDir, project);
    if (!proj) {
      proj = LocalDsManager.createProject(rootDir, project);
    }

    LocalDsManager.appendRecord(rootDir, proj, ds);
  }

  static getReportData(rootDir: string, project: IProject) {
    const manifest = LocalDsManager.getProjectsManifest(rootDir);
    const proj = manifest.projects.find(
      (p) => p.originUrl === project.originUrl && p.projectName === project.projectName
    );

    if (!proj) {
      throw new Error('该项目暂无记录！');
    }

    type Model = ReturnType<typeof diff>[0];
    const diffs = [] as Array<{
      saveTime: Date;
      boDiffs: Model[];
      modDiffs: Model[];
    }>;

    proj.records.forEach((record, recordIndex) => {
      if (recordIndex === 0) {
        return;
      }
      const lastRecord = proj.records[recordIndex - 1];
      const currRecord = record;
      const lastDs: StandardDataSource = LocalDsManager.getProject(
        rootDir,
        `${project.projectPath}/${lastRecord.filename}`
      );
      const currDs: StandardDataSource = LocalDsManager.getProject(
        rootDir,
        `${project.projectPath}/${currRecord.filename}`
      );

      const currDiff = diffDses(lastDs, currDs);
      diffs.push({
        saveTime: currRecord.saveTime,
        boDiffs: currDiff.boDiffs,
        modDiffs: currDiff.modDiffs
      });
    });

    return {
      records: project.records,
      diffs
    };
  }

  static openReport(rootDir: string, project: IProject) {
    const { diffs, records } = LocalDsManager.getReportData(rootDir, project);
    const htmlPath = PontFileManager.getLocalFilePath(rootDir, 'report.html');

    // 后续优化。
    PontFileManager.saveFile(
      htmlPath,
      `
<html>
  <div>项目记录数：${records.length}</div>
  <div>历次变更详情：</div>
  报表UI 待优化：
  <pre>
  ${diffs.map((diff) => {
    return `
      <pre>
      ${diff.saveTime}：
      ${diff.modDiffs.join('\n')}
      ${diff.boDiffs.join('\n')}
      </pre>
    `;
  })}
  </pre>
</html>
    `
    );

    execSync(`open ${htmlPath}`);
  }
}
