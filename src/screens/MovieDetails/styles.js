import {styleSheetFactory} from '../../utils/theme';
import {Dimensions} from 'react-native';

const height = Math.round(Dimensions.get('window').height);

const themedStyles = styleSheetFactory((theme) => {
  return {
    mainCointainer: {
      height: '100%',
      backgroundColor: theme.backgroundColor,
    },
    activity: theme.textColor,
    loading: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      color: theme.textColor,
      fontSize: 20,
    },
  };
});

export default themedStyles;
