import * as program from 'commander';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as debugLog from './debugLog';
import { createManager } from './utils';
import { StandardDataSource } from './standard';

const packageFilePath = path.join(__dirname, '..', 'package.json');
const packageInfo = JSON.parse(fs.readFileSync(packageFilePath, 'utf8'));

const currentVersion = packageInfo.version;

program.version(currentVersion).usage('[命令] [配置项]');

program.description('powerful api code generator');

function assert(expression: boolean, message: string) {
  if (!expression) {
    debugLog.error(message);
    process.exit(1);
  }
}

(async function() {
  try {
    const manager = await createManager();

    program
      .command('check')
      .description('检测 api-lock.json 文件')
      .action(async () => {
        debugLog.info('api-lock.json 文件检测中...');
        const fileContent = await manager.readLockFile();

        try {
          const localDatas = JSON.parse(fileContent) as StandardDataSource[];
          if (localDatas.length > 1) {
            assert(
              localDatas.every(data => !!data.name),
              '多数据源每个数据源应该有 "name"'
            );
          }

          localDatas.forEach(data => {
            data.baseClasses.forEach(base => {
              assert(!!base.name, `描述为 ${base.description} 的类没有"name"属性`);

              base.properties.forEach(prop => {
                assert(!!prop.name, `${base.name} 类的某个属性没有 "name" 属性`);
              });
            });

            data.mods.forEach(mod => {
              assert(!!mod.name, `描述为 ${mod.description} 的模块没有 "name" 属性`);

              mod.interfaces.forEach(inter => {
                assert(!!inter.name, `${mod.name} 模块的某个接口没有 "name" 属性`);

                inter.parameters.forEach(param => {
                  assert(!!param.name, `${mod.name} 模块的 ${inter.name} 接口的某个参数没有 "name" 属性`);
                });
              });
            });
          });
        } catch (e) {
          debugLog.error(e);
          process.exit(1);
        }

        process.exit(0);
      });

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
        console.log(modDiffs.map(mod => `${mod.name}(${mod.details.join(',').slice(0, 20)})`).join('\n'));
        console.log('基类');
        console.log(boDiffs.map(bo => `${bo.name}(${bo.details.join(',').slice(0, 20)})`).join('\n'));
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

    program
      .command('generate')
      .description('生成代码')
      .action(() => {
        manager.regenerateFiles();
      });

    program.parse(process.argv);
  } catch (e) {
    console.error(e.stack);
    debugLog.error(e.toString());
  }
})();
