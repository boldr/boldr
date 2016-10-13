import findQuery from 'objection-find';
import slugify from 'slugify';
import uuid from 'node-uuid';
import { responseHandler, throwNotFound } from '../../utils';
import { InternalError } from '../../utils/errors';
import Activity from '../activity/activity.model';
import Navigation from '../navigation/navigation.model';
import NavigationLink from '../navigation/navigationLink.model';
import Link from './link.model';

const debug = require('debug')('boldr:link-controller');

async function index(req, res) {
  const navigations = await Link.query();

  if (!navigations) {
    responseHandler(null, res, 500);
  }

  return res.status(200).json(navigations);
}

async function getId(req, res) {
  const navigation = await Link
    .query()
    .findById(req.params.id);
  return responseHandler(null, res, 200, navigation);
}

async function create(req, res, next) {
  try {
    const payload = {
      name: req.body.name,
      href: req.body.href,
      icon: req.body.icon,
      position: req.body.position,
      uuid: uuid.v4()
    };
    const newLink = await Link.query().insert(payload);
    debug('----------newLink ', newLink);
    const navId = req.body.nav_id || 1;
    const existingNav = await Navigation.query().where('id', navId).first();
    if (!existingNav) {
      debug('if clause; i fucked up ');
      throw new InternalError();
    }
    debug(existingNav, 'existing navigation found');
    const associateLinkNav = await NavigationLink.query().insert({
      navigation_id: existingNav.id,
      link_id: newLink.id
    });
    debug(associateLinkNav);
    await Activity.query().insert({
      id: uuid.v4(),
      name: payload.name,
      user_id: req.user.id,
      action: 'New link',
      type: 1,
      data: { payload },
      entry_id: newLink.uuid,
      entry_table: 'link'
    });

    return res.status(201).json(newLink);
  } catch (error) {
    return next(new InternalError(error));
  }
}

function update(req, res) {
  return Link.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(navigation => res.status(202).json(navigation));
}

export { index, update, getId, create };
