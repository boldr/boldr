import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import { pinkA200, grey100, grey500, lightBlue100, lightBlue500, lightBlue700,
  grey900, white, grey300, fullBlack } from 'material-ui/styles/colors';

export const primary1Color = lightBlue500;
export const primary2Color = lightBlue700;
export const primary3Color = lightBlue100;
export const accent1Color = pinkA200;
export const accent2Color = grey100;
export const accent3Color = grey500;
export const textColor = grey900;
export const alternateTextColor = white;
export const canvasColor = white;
export const borderColor = grey300;
export const disabledColor = fade(grey900, 0.3);
export const pickerHeaderColor = '#0376a3';
export const clockCircleColor = fade(grey900, 0.07);
export const shadowColor = fullBlack;

const materialStyle = {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color,
    primary2Color,
    primary3Color,
    accent1Color,
    accent2Color,
    accent3Color,
    textColor,
    alternateTextColor,
    canvasColor,
    borderColor,
    disabledColor,
    pickerHeaderColor,
    clockCircleColor,
    shadowColor,
  },
  listItem: {
    rightIconColor: '#fff',
  },
  // eslint-disable-next-line
  userAgent: (typeof req !== 'undefined') ? req.headers['user-agent'] : false
};

const inlineStyles = {
  drawer: {
    backgroundColor: '#133145',
    color: '#D5DADD',
    top: '56px',
  },
};

export default materialStyle;
export { inlineStyles };
