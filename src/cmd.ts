import * as program from 'commander';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as debugLog from './debugLog';
import { createManager } from './utils';

const packageFilePath = path.join(__dirname, '..', 'package.json');
const packageInfo = JSON.parse(fs.readFileSync(packageFilePath, 'utf8'));

const currentVersion = packageInfo.version;

program.version(currentVersion).usage('[命令] [配置项]');

program.description('powerful api code generator');

(async function() {
  try {
    const manager = await createManager();

    program
      .command('ls')
      .description('查看数据源')
      .action(() => {
        debugLog.info(manager.allConfigs.map(conf => conf.name).join('  '));
      });

    program
      .command('diff')
      .description('对比数据源')
      .action(() => {
        manager.calDiffs();
        const { modDiffs, boDiffs } = manager.diffs;

        console.log('模块：');
        console.log(
          modDiffs
            .map(mod => `${mod.name}(${mod.details.join(',').slice(0, 20)})`)
            .join('\n')
        );
        console.log('基类');
        console.log(
          boDiffs
            .map(bo => `${bo.name}(${bo.details.join(',').slice(0, 20)})`)
            .join('\n')
        );
      });

    program
      .command('select <dsName>')
      .description('选择数据源')
      .action(dsName => {
        manager.selectDataSource(dsName);
      });

    program
      .command('updateBo <boName>')
      .description('更新基类')
      .action(boName => {
        manager.makeSameBase(boName);
      });

    program
      .command('updateMod <modName>')
      .description('更新模块')
      .action(modName => {
        manager.makeSameMod(modName);
      });

    program.parse(process.argv);
  } catch (e) {
    console.error(e.stack);
    debugLog.error(e.toString());
  }
})();
