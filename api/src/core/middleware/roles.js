import pathToRegexp from 'path-to-regexp';

class Roles {
  constructor(config) {
    this.config = config;
    if (typeof this.config.authenticationFunction !== 'function') {
      throw new Error('No authenticationFunction given or not a function!');
    }
    if (this.config.permissionsMapFile) {
      this.config.permissionsMap = require(this.config.permissionsMapFile);
    } else if (!this.config.permissionsMap) {
      throw new Error('No permissionsMap or permissionsMapFile given!');
    }

    const services = this.config.permissionsMap;
    const servicesRegExp = {};
    let keys;
    let reg;
    for (const method in services) {
      if (!services.hasOwnProperty(method)) {
        continue;
      }
      for (const endpoint in services[method]) {
        if (!services[method].hasOwnProperty(endpoint)) {
          continue;
        }
        if (!servicesRegExp[method]) {
          servicesRegExp[method] = [];
        }

        keys = [];
        reg = pathToRegexp(endpoint, keys);
        servicesRegExp[method].push({ options: services[method][endpoint], reg, path: endpoint });
      }
    }
    this.servicesRegExp = servicesRegExp;
  }

  permissionDenied(req, res, next) {
    res.status(403).send('Permission denied!');
  }

  checkAuth(req, res, next) {
    const self = this;
    const servicesRegExp = this.servicesRegExp;
    let permittedRoles = [];

    if (servicesRegExp[req.method]) {
      for (let i = 0; servicesRegExp[req.method] && i < servicesRegExp[req.method].length; i++) {
        if (servicesRegExp[req.method][i].options.roles && servicesRegExp[req.method][i].reg.test(req._parsedUrl.pathname)) {
          permittedRoles = servicesRegExp[req.method][i].options.roles;
          break;
        }
      }
    }

    if (permittedRoles.length > 0) {
      this.config.authenticationFunction(req, res, next, (err, roles) => {
        if (err) {
          throw new Error(err);
        }


        for (const item in roles) {
          const role = roles[item];
          if (permittedRoles.includes(role)) {
            return next();
          }
        }
        return self.permissionDenied(req, res, next);
      });
    } else {
      next();
    }
  }

  middleware() {
    return this.checkAuth;
  }
}

export default Roles;
