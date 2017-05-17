/* @flow */
import { resolve as pathResolve } from 'path';
import requiredParam from 'boldr-utils/es/logic/requiredParam';

const ABS_ROOT = process.cwd();

export const ASSETS_MANIFEST_PATH: string = requiredParam(
  process.env.ASSETS_MANIFEST_PATH,
);
export const ASSETS_DIR: string = requiredParam(process.env.ASSETS_DIR);
export const IS_DEVELOPMENT: boolean =
  requiredParam(process.env.NODE_ENV) === 'development';
export const PUBLIC_DIR: string = requiredParam(process.env.PUBLIC_DIR);
export const SERVER_PORT: number = parseInt(
  requiredParam(process.env.SERVER_PORT),
  10,
);
export const BUNDLE_ASSETS_FILENAME = requiredParam(
  process.env.BUNDLE_ASSETS_FILENAME,
);
// export const CHUNK_MANIFEST_FILENAME = notEmpty(process.env.CHUNK_MANIFEST_FILENAME);/

export const ABSOLUTE_ASSETSMANIFEST_PATH = pathResolve(
  ABS_ROOT,
  // $FlowIssue
  process.env.ASSETS_DIR,
  // $FlowIssue
  process.env.BUNDLE_ASSETS_FILENAME,
);
