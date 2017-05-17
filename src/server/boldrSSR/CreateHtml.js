/* eslint-disable react/no-danger, react/no-array-index-key, react/jsx-key */
/* @flow */
import React, { Children } from 'react';
import serialize from 'serialize-javascript';
import { ifElse, removeNil } from 'boldr-utils';
import type { Head } from 'react-helmet';
import ClientConfig from '../../../config/components/ClientConfig';
import Html from '../../shared/components/Html';

import getAssets from './getAssets';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

function KeyedComponent({ children }) {
  return Children.only(children);
}

// Resolve the assets (js/css) for the client bundle's entry chunk.
const clientEntryAssets = getAssets();

/**
 * Takes a stylesheet file path and creates an html
 * style element
 * @param  {string} stylesheetFilePath path of the file
 * @return {element}                    dom element
 */
function createStyleElement(stylesheetFilePath: string) {
  return (
    <link
      href={stylesheetFilePath}
      media="screen, projection"
      rel="stylesheet"
      type="text/css"
    />
  );
}

/**
 * Takes a javascript file path and creates an html
 * script element
 * @param  {string} jsFilePath          path of the file
 * @return {element}                    dom element
 */
function createScriptElement(jsFilePath: string) {
  return <script type="text/javascript" src={jsFilePath} />;
}

export type CreateHtmlProps = {
  reactAppString: string,
  nonce: string,
  preloadedState: Object,
  helmet: Head,
  styles: Object,
};

function CreateHtml(props: CreateHtmlProps) {
  const { reactAppString, nonce, preloadedState, helmet, styles } = props;

  // Creates an inline script definition that is protected by the nonce.
  const inlineScript = (body: string) => (
    <script
      nonce={nonce}
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );

  const headerElements = removeNil([
    ...ifElse(helmet)(() => helmet.title.toComponent(), []),
    ...ifElse(helmet)(() => helmet.base.toComponent(), []),
    ...ifElse(helmet)(() => helmet.meta.toComponent(), []),
    ...ifElse(helmet)(() => helmet.link.toComponent(), []),
    ifElse(clientEntryAssets && clientEntryAssets.app.css)(() =>
      createStyleElement(clientEntryAssets.app.css),
    ),
    ...ifElse(helmet)(() => helmet.style.toComponent(), []),
  ]);

  const bodyElements = removeNil([
    // Binds the client configuration object to the window object so
    // that we can safely expose some configuration values to the
    // client bundle that gets executed in the browser.
    <ClientConfig nonce={nonce} />,
    inlineScript(`window.__PRELOADED_STATE__=${serialize(preloadedState)};`),
    createScriptElement(
      'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Symbol',
    ),
    ifElse(isProd && clientAssets && clientAssets.common)(() =>
      createScriptElement(clientAssets.common.js),
    ),
    ifElse(isProd && clientAssets && clientAssets.vendor.js)(() =>
      createScriptElement(clientAssets.vendor.js),
    ),
    ifElse(isDev)(() =>
      createScriptElement(
        `http://localhost:3001/assets/__vendor_dlls__.js?t=${Date.now()}`,
      ),
    ),

    ifElse(clientAssets && clientAssets.app.js)(() =>
      createScriptElement(clientAssets.app.js),
    ),
    ...ifElse(helmet)(() => helmet.script.toComponent(), []),
  ]);

  return (
    <Html
      htmlAttributes={ifElse(helmet)(
        () => helmet.htmlAttributes.toComponent(),
        null,
      )}
      headerElements={headerElements.map((x, idx) => (
        <KeyedComponent key={idx}>{x}</KeyedComponent>
      ))}
      bodyElements={bodyElements.map((x, idx) => (
        <KeyedComponent key={idx}>{x}</KeyedComponent>
      ))}
      appBodyString={reactAppString}
    />
  );
}

export default CreateHtml;
