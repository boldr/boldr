import cookie from 'react-cookie';

export default (keyName) => {
  return {
    save: (value) => {
      cookie.save(keyName, value);
    },
    remove: () => {
      cookie.remove(keyName);
    }
  };
};
