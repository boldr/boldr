import uniqueId from 'lodash/uniqueId';

export const UniqueIndex = () => {
  return uniqueId();
};
// export const UniqueIndex = () => {

//     if (isNaN(typeof window !== 'undefined' && typeof window === 'object' &&window.__BRAFT_UNIQUE_INDEX__)) {
//       window.__BRAFT_UNIQUE_INDEX__ = 1
//     } else {
//       window.__BRAFT_UNIQUE_INDEX__ += 1
//     }

//     return window.__BRAFT_UNIQUE_INDEX__

//   }
export const isPromise = obj => {
  return (
    Boolean(obj) &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
};

export const rgbToHex = rgb => {
  if (rgb.indexOf('#') === 0) {
    return rgb;
  }

  let rgbArray = rgb.split(',');

  return (
    '#' +
    [rgbArray[0], rgbArray[1], rgbArray[2]]
      .map(x => {
        const hex = parseInt(x.replace(/\D/g, ''), 10).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
};

export const imageToURL = param => {
  setTimeout(() => {
    param.onSuccess({
      url: URL.createObjectURL(param.file),
      name: param.file.name,
    });
  }, 1000);
};
