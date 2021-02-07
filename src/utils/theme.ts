import {registerThemes} from 'react-native-themed-styles';

const light = {
  backgroundColor: 'white',
  cardBackgroundColor: 'white',
  shadow: '#979797',
  textColor: '#525252',
  lightTextColor: '#919191',
  activeInput: '#1d1d1d',
  border: 'black',
  blue_dark: '#36338F',
  blue: '#3b5998',
  blue_light: '#1da1f2',
  blue_green: '#08C4B2',
  blue_2: '#0077B5',
  blue_map: '#82c7f8',
  blue_next: '#4287f5',
  background_blue: '#16202a',
  green: '#7bc768',
  red: '#e4405f',
  violet: '#834796',
  yellow: '#fdec9a',
  orange: '#ff9800',
  calendarText: '#525252',
  dark_grey: '#525252', //DARK: "#f3f3f3",
  dar_grey_2: '#17202a',
  grey: '#979797',
  grey_2: '#babac2',
  light_grey: '#f3f3f3', //DARK: "#000"
  light_blue_grey: '#eeeef3',
  blue_grey: '#232f43',

  black: '#000', //DARK: "#fff",
  white: '#fff', //DARK: "#1E2225",

  button_text: '#fff',
  circleUnfilled: '#f3f3f3',
};
const dark = {
  backgroundColor: '#1f1f1f',
  cardBackgroundColor: '#2b2b2b',
  shadow: 'black',
  textColor: 'white',
  lightTextColor: '#919191',
  activeInput: 'white',
  border: '#6e6e6e',
  blue_dark: '#36338F',
  blue: '#3b5998',
  blue_light: '#1da1f2',
  blue_green: '#08C4B2',
  blue_2: '#0077B5',
  blue_map: '#82c7f8',
  blue_next: '#4287f5',
  background_blue: '#16202a',
  green: '#7bc768',
  red: '#e4405f',
  violet: '#834796',
  yellow: '#fdec9a',
  orange: '#ff9800',
  calendarText: '#4287f5',
  dark_grey: '#525252', //DARK: "#f3f3f3",
  dar_grey_2: 'white',
  grey: '#979797',
  grey_2: '#babac2',
  light_grey: '#f3f3f3', //DARK: "#000"
  light_blue_grey: '#eeeef3',
  blue_grey: '#232f43',

  black: '#000', //DARK: "#fff",
  white: '#fff', //DARK: "#1E2225",

  button_text: '#fff',
  circleUnfilled: '#1f1f1f',
};

const styleSheetFactory = registerThemes({light, dark}, () => 'light');

export {styleSheetFactory};
