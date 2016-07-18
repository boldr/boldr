import { fade } from 'material-ui/utils/colorManipulator';
import { cyan700, gray900, darkBlack, gray400, pinkA100, pinkA400, fullWhite, white } from 'material-ui/styles/colors';
import zIndex from 'material-ui/styles/zIndex';

const pinkish = '#DD144D';
const fontColor = '#485558';
export default {
  zIndex,
  spacing: {
    iconButtonSize: 24,
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: cyan700,
    accent1Color: pinkish,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: fontColor,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: gray400,
    disabledColor: fade(darkBlack, 0.3),
    pinkish
  }
};
