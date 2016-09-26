import path from 'path';
import { Model } from 'objection';
import Navigation from '../navigation/navigation.model';

class Link extends Model {
  static get tableName() { return 'link'; }
  static get relationMappings() {
    return {
      navigation: {
        relation: Model.ManyToManyRelation,
        modelClass: Navigation,
        join: {
          from: 'link.id',
          through: {
            from: 'navigation_link.link_id',
            to: 'navigation_link.navigation_id',
          },
          to: 'navigation.id',
        },
      }
    };
  }
}

export default Link;