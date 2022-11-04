/**
 * @description 持久化接口变更记录。
 * 保存一份总的 manifest 的 JSON 文件。该文件包括所有项目的信息，始终和接口变更目录保持一致。方便做信息查询。
 */
import type { IStandardDataSource } from '../types/dataSource';
import type { StandardDataSource } from '../main/StandardDataSource';

import { PROJECTS_MANIFEST_FILE } from '../constants';
import { PontFileManager } from './PontFileManager';

class Record {
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

  static getProject(rootDir: string, filename: string): IStandardDataSource {
    const projectPath = PontFileManager.getLocalFilePath(rootDir, filename);
    return PontFileManager.loadJson<IStandardDataSource>(projectPath);
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
  static getLatestDsInProject(rootDir: string, project: IProjectParams): IStandardDataSource {
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
}
