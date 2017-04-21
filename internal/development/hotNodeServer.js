import path from 'path';
import { spawn } from 'child_process';
import appRootDir from 'app-root-dir';
import { log } from '../utils';

const debug = require('debug')('boldr:webpack');

class HotNodeServer {
  constructor(name, compiler, clientCompiler) {
    const compiledEntryFile = path.resolve(
      appRootDir.get(),
      compiler.options.output.path,
      `${Object.keys(compiler.options.entry)[0]}.js`,
    );

    const startServer = () => {
      if (this.server) {
        this.server.kill();
        this.server = null;
        log({
          title: name,
          level: 'info',
          message: 'Restarting server...',
        });
      }

      const newServer = spawn('node', [compiledEntryFile]);

      log({
        title: name,
        level: 'info',
        message: 'Server running with latest changes.',
        notify: true,
      });

      newServer.stdout.on('data', data => debug(data.toString().trim()));
      newServer.stderr.on('data', data => {
        log({
          title: name,
          level: 'error',
          message: 'Error in server exec, check the console for more info.',
        });

        debug(data.toString().trim());
      });
      this.server = newServer;
    };

    const waitForClientThenStartServer = () => {
      if (this.serverCompiling) {
        return;
      }
      if (this.clientCompiling) {
        setTimeout(waitForClientThenStartServer, 50);
      } else {
        startServer();
      }
    };

    clientCompiler.plugin('compile', () => {
      this.clientCompiling = true;
    });

    clientCompiler.plugin('done', stats => {
      if (!stats.hasErrors()) {
        this.clientCompiling = false;
      }
    });

    compiler.plugin('compile', () => {
      this.serverCompiling = true;
      log({
        title: name,
        level: 'info',
        message: 'Building new bundle...',
      });
    });

    compiler.plugin('done', stats => {
      this.serverCompiling = false;

      if (this.disposing) {
        return;
      }

      try {
        if (stats.hasErrors()) {
          log({
            title: name,
            level: 'error',
            message: 'Build failed, check the console for more information.',
            notify: true,
          });
          debug(stats.toString());
          return;
        }

        waitForClientThenStartServer();
      } catch (err) {
        log({
          title: name,
          level: 'error',
          message: 'Failed to start, check the console for more information.',
          notify: true,
        });
        debug(err);
      }
    });

    // Lets start the compiler.
    this.watcher = compiler.watch(null, () => undefined);
  }

  dispose() {
    this.disposing = true;

    const stopWatcher = new Promise(resolve => {
      this.watcher.close(resolve);
    });

    return stopWatcher.then(() => {
      if (this.server) {
        this.server.kill();
      }
    });
  }
}

export default HotNodeServer;
