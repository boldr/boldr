import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const { assets, component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
          <Helmet />
          { head.base.toComponent() }
          { head.title.toComponent() }
          { head.meta.toComponent() }
          { head.link.toComponent() }
          { head.script.toComponent() }

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {
            Object.keys(assets.styles).map((style, key) =>
            <link
              href={ assets.styles[style] } key={ key } media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />
            )
          }

          {/* (will be present only in development mode) */}
          {
            Object.keys(assets.styles).length === 0 ?
            <style dangerouslySetInnerHTML={ { __html: '#content{display:none}' } } /> :
            null
          }
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={ { __html: content } } />
          <script dangerouslySetInnerHTML={ {
            __html: `window.PRELOAD_STATE=${serialize(store.getState())};` } }
            charSet="UTF-8"
          />
          { __DLLS__ ? <script key="dlls__vendor" src="/assets/dlls/dll__vendor.js" charSet="UTF-8" /> :
                 <script key="vendor" src={ assets.javascript.vendor } charSet="UTF-8" /> }

                   <script src={ assets.javascript.main } charSet="UTF-8" />
      {
        Object.keys(assets.styles).length === 0 ?
        <script dangerouslySetInnerHTML={ { __html: 'document.getElementById("content").style.display="block";' } } />
        : null
      }
        </body>
      </html>
    );
  }
}
