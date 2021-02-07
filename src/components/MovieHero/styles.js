import {Platform} from 'react-native';
import colors from '../../utils/colors';
import {styleSheetFactory} from '../../utils/theme';
import {Dimensions, StyleSheet} from 'react-native';

const height = Math.round(Dimensions.get('window').height);

const themedStyles = styleSheetFactory((theme) => {
  return {
    container: {
      width: '100%',
    },
    title: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 24,
      fontFamily: 'System',
    },
    subtitle: {
      color: colors.light_grey,
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'System',
    },
    loader: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activity: theme.textColor,
    circle: colors.yellow,
    text: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    info: {
      color: colors.light_grey,
    },
  };
});

export default themedStyles;
