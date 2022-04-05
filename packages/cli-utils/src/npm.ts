import { spawnSync } from 'child_process';

export function getNpmLatestVersion(packageName: string) {
  const registry = '';
  const platform = process.platform;
  const npmCommander = platform === 'win32' ? 'npm.cmd' : 'npm';
  const { stdout } = spawnSync(npmCommander, [
    'view',
    packageName,
    '--registry',
    registry,
  ]);
  console.log(stdout);
}
