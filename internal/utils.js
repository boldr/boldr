import { execSync } from 'child_process';
import appRootDir from 'app-root-dir';

export function exec(command) {
  execSync(command, {
    stdio: 'inherit',
    cwd: appRootDir.get(),
  });
}
