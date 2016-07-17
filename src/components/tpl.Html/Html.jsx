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
  get styles() {
    const { assets } = this.props;
    const { styles, assets: _assets } = assets;
    const stylesArray = Object.keys(styles);

      // styles (will be present only in production with webpack extract text plugin)
    if (stylesArray.length !== 0) {
      return stylesArray.map((style, i) =>
          <link href={ assets.styles[style] } key={ i } rel="stylesheet" type="text/css" />
        );
    }

      // (will be present only in development mode)
      // It's not mandatory but recommended to speed up loading of styles
      // (resolves the initial style flash (flicker) on page load in development mode)
    const scssPaths = Object.keys(_assets).filter(asset => asset.includes('.scss'));
    return scssPaths.map((style, i) =>
        <style dangerouslySetInnerHTML={ { __html: _assets[style]._style } } key={ i } />
      );
  }

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

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          { /* styles (will be present only in production with webpack extract text plugin) */ }
          { Object.keys(assets.styles).map((style, key) =>
            <link href={ assets.styles[style] } key={ key } media="screen, projection"
              rel="stylesheet" type="text/css" charSet="UTF-8"
            />
          ) }
          { this.styles }
        </head>
        <body>
          <div id="content" style={ { minHeight: '100vh' } } dangerouslySetInnerHTML={ { __html: content } } />
          <script dangerouslySetInnerHTML={ {
            __html: `window.__INITIAL_STATE__=${serialize(store.getState())};` } }
            charSet="UTF-8"
          />
          <script src={ assets.javascript.vendor } charSet="UTF-8" />
          <script src={ assets.javascript.main } charSet="UTF-8" />
        </body>
      </html>
    );
  }
}
