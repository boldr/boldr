/**
 * This file resolves the entry assets available from our client bundle.
 */
/* @flow */

import fs from 'fs';
import { ABSOLUTE_ASSETSMANIFEST_PATH, IS_DEVELOPMENT } from '../config';

let resultCache;

/**
 * Retrieves the js/css for the named chunks that belong to our client bundle.
 *
 * Note: the order of the chunk names is important. The same ordering will be
 * used when rendering the scripts.
 *
 * This is useful to us for a couple of reasons:
 *   - It allows us to target the assets for a specific chunk, thereby only
 *     loading the assets we know we will need for a specific request.
 *   - The assets are hashed, and therefore they can't be "manually" added
 *     to the render logic.  Having this method allows us to easily fetch
 *     the respective assets simply by using a chunk name. :)
 */
export default function getAssets() {
  // Return the assets json cache if it exists.
  // In development mode we always read the assets json file from disk to avoid
  // any cases where an older version gets cached.
  if (!IS_DEVELOPMENT && resultCache) {
    return resultCache;
  }

  if (!fs.existsSync(ABSOLUTE_ASSETSMANIFEST_PATH)) {
    throw new Error(
      `We could not find the "${ABSOLUTE_ASSETSMANIFEST_PATH}" file, which contains a list of the assets of the client bundle.  Please ensure that the client bundle has been built.`,
    );
  }
  const readAssetsJSONFile = () =>
    JSON.parse(fs.readFileSync(ABSOLUTE_ASSETSMANIFEST_PATH, 'utf8'));
  const assetsJSONCache = readAssetsJSONFile();
  resultCache = assetsJSONCache;
  return resultCache;
}
