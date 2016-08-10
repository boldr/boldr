// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
const context = require.context('./src', true, /.test.js$/);
context.keys().forEach(context);
