import Storage from './Storage';

export default new Storage({
  storage: (window.localStorage) ? localStorage : null
});
