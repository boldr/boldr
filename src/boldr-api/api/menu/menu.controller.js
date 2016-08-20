import { Menu } from '../../db/models';
import {
  RespondError,
  BAD_REQ_MSG,
  ACCOUNT_404_MSG,
  GENERAL_404_MSG,
  UNAUTHORIZED_MSG,
  respondWithResult,
  saveUpdates,
  handleEntityNotFound,
  removeEntity,
  handleError
} from '../../lib';

/**
 * @api {get} /menus       Get the menus for the website
 * @apiVersion 1.0.0
 * @apiName getMenus
 * @apiGroup Menu
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/menus
 *
 * @apiSuccess {Number}  id           The Menu ID
 * @apiSuccess {String}  name         The name of the menu
 * @apiSuccess {String}  location     Where the menu belongs
 */
async function getMenus(req, res, next) {
  try {
    const menus = await Menu.findAll();

    return res.status(200).json(menus);
  } catch (error) {
    return next(new RespondError(BAD_REQ_MSG, 400));
  }
}

/**
 * @api {post} /menus      Create a new menu
 * @apiVersion 1.0.0
 * @apiName createMenu
 * @apiGroup Menu
 *
 */
function createMenu(req, res, next) {
  return Menu.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

/**
 * @api {put} /menus/:id     Update the specified menu
 * @apiVersion 1.0.0
 * @apiName updateMenu
 * @apiGroup Menu
 *
 */
function updateMenu(req, res, next) {
  const menuId = req.params.id;
  return Menu.find({ where: { id: menuId } }).then(menu => {
    if (!menu) {
      return next(new RespondError(GENERAL_404_MSG, 404));
    }
    const updates = req.body;
    menu.updateAttributes(updates)
      .then(updated => {
        res.status(202).json(updated);
      })
      .catch(handleError(res));
  });
}

export { getMenus, createMenu, updateMenu };
