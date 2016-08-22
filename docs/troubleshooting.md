Troubleshooting
============

##### Webpack Isomorphic Tools is outputting to console that it is unable to find styles.  

Check inside `tools/webpack/client.dev.js` for the context value. It should be referencing the absolute root of the directory.  

##### Webpack Isomorphic Tools is telling you the port is already in use. 

Open `tool/webpack/isomorphic.config.js` and find the line that declares a port. Either comment it out or change the value to an open port on your machine. Setting a port will have Webpack Isomorphic Tools serve the content from memory during development and as a result wont write a webpack-assets.json.
