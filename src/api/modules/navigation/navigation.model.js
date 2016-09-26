import path from 'path';
import { Model } from 'objection';
import Link from '../link/link.model';

class Navigation extends Model {
  static get tableName() { return 'navigation'; }
  static get relationMappings() {
    return {
      links: {
        relation: Model.ManyToManyRelation,
        modelClass: Link,
        join: {
          from: 'navigation.id',
          through: {
            from: 'navigation_link.navigation_id',
            to: 'navigation_link.link_id',
          },
          to: 'link.id',
        },
      }
    };
  }
}

export default Navigation;
