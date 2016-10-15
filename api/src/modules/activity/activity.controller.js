import { responseHandler, throwNotFound } from '../../utils';

import Activity from './activity.model';

const debug = require('debug')('boldr:activity-controller');

export async function listActivities(req, res) {
  try {
    const activities = await Activity.query().orderBy('created_at', 'desc').eager('owner');
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json(error);
  }
}
