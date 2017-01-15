import * as t from './constants';

export function changeLayout(layout) {
  return {
    type: t.CHANGE_LAYOUT,
    payload: layout,
  };
}

export const showModal = () => ({ type: t.MODAL_OPEN });
export const hideModal = () => ({ type: t.MODAL_CLOSED });
export const openDrawer = () => ({ type: t.OPEN_DRAWER });
export const closeDrawer = () => ({ type: t.CLOSE_DRAWER });
export const expandNavbar = () => ({ type: t.EXPAND_NAVBAR });
export const collapseNavbar = () => ({ type: t.COLLAPSE_NAVBAR });
