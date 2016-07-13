const path = require('path');
const webpack = require('webpack');

const ROOT_DIR = path.join(__dirname, '..', '..');

exports.installVendorDLL = function(config, dllName) {
  // DLL shizzle. Read more about this in /webpack/dlls/README.md
  if (process.env.WEBPACK_DLLS === '1') {
    const manifest = loadDLLManifest(path.join(ROOT_DIR, 'tools/webpack/dlls/manifests/' + dllName + '.json'));

    if (manifest) {
      console.warn('Webpack: will be using the "%s" DLL.', dllName);

      config.plugins.push(new webpack.DllReferencePlugin({
        context: ROOT_DIR,
        manifest
      }));
    }
  }
};

function loadDLLManifest(filePath) {
  try {
    return require(filePath);
  } catch (e) {
    process.env.WEBPACK_DLLS = '0';

    console.error(
      function() {}.toString().slice(15, -4)
    );
  }

  return undefined;
}
