import chalk from 'chalk';

export default {
  logo(msg: string) {
    console.log(chalk.hex('#6649b8').bold(msg));
  },
  info(msg: string) {
    console.log(chalk.gray(msg));
  },
  warn(msg: string) {
    console.log(chalk.yellow(msg));
  },
  error(msg: string) {
    console.log(chalk.red(msg));
  },
  success(msg: string) {
    console.log(chalk.green(msg));
  },
};
