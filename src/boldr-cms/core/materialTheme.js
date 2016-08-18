import { fade } from 'material-ui/utils/colorManipulator';
import { fullBlack, grey300, darkBlack, pinkA200, pinkA400, fullWhite, white } from 'material-ui/styles/colors';
import zIndex from 'material-ui/styles/zIndex';

export const midnightBlue = '#2A3140';
export const cyanLike = '#36C6D1';
export const boldrPink = '#DD144D';
export const grape = '#40404E';
export const txtColor = 'rgba(0,0,0,.87)';

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
    primary1Color: midnightBlue,
    primary2Color: midnightBlue,
    primary3Color: cyanLike,
    accent1Color: boldrPink,
    accent2Color: grape,
    accent3Color: midnightBlue,
    textColor: txtColor,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: fade(fullWhite, 0.7),
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: fade(darkBlack, 0.12),
    clockCircleColor: fade(darkBlack, 0.12),
    shadowColor: fullBlack
  }
};
