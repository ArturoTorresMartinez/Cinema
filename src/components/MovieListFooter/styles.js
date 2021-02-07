import {Platform} from 'react-native';
import colors from '../../utils/colors';
import {styleSheetFactory} from '../../utils/theme';
import {Dimensions} from 'react-native';

const height = Math.round(Dimensions.get('window').height);

const themedStyles = styleSheetFactory((theme) => {
  return {
    container: {
      marginBottom: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.textColor,
      fontSize: 20,
    },
    loader: theme.textColor,
  };
});

export default themedStyles;
