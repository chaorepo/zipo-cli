#! /usr/bin/env node

import { Command } from 'commander';
import { logger } from '@zipo/cli-utils';
import { argv } from 'process';
import { logo } from './constants';
import create from './actions/create';
import add from './actions/add';

const program: Command = new Command();

program
  .name('zipo')
  .usage('<command> [options]')
  .action((cmd) => {
    if (cmd.version) return;
    logger.logo(logo);

    program.help();
  });

program.option('-v, --version', '查看当前版本号').action(() => {
  const version = require('../package.json').version;
  logger.info(version);
});

program
  .command('create <projectName>')
  .description('创建新的Monorepo物料项目')
  .action(create);

program
  .command('add <projectName>')
  .description('创建新的物料组件项目')
  .action(add);

program.parse(argv);
