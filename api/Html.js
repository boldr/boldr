import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

export default (content, initialState) => {
  const head = Helmet.rewind();
  const assets = webpackIsomorphicTools.assets();
  return `
      <!DOCTYPE html>
      <html ${head.htmlAttributes.toString()}>
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          ${head.base.toString()}
          ${head.title.toString()}
          ${head.meta.toString()}
          ${head.link.toString()}
          ${
            Object.keys(assets.styles).map(style =>
              `<link href="${assets.styles[style]}" media="screen, projection" rel="stylesheet" type="text/css" />`)
              .join('\n')
          }
        </head>
        <body className="layout">
          <div id="content">${content || null}</div>

          <script type="text/javascript">
            ${initialState && `window.PRELOAD_STATE=${serialize(initialState)}`}
          </script>
          <!--[if gte IE 9 ]>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-sham.min.js"></script>
          <![endif]-->
          ${
            /* Reverse the order of scripts for accessing vendor.js first */
            Object.keys(assets.javascript).reverse().map(script =>
            `<script src="${assets.javascript[script]}"></script>`)
            .join('\n')
          }
          ${head.script.toString()}
        </body>
      </html>
    `;
};
