import {Platform} from 'react-native';
import colors from '../../utils/colors';
import {styleSheetFactory} from '../../utils/theme';
import {Dimensions} from 'react-native';

const height = Math.round(Dimensions.get('window').height);

const themedStyles = styleSheetFactory((theme) => {
  return {
    container: {
      height: 280,
      flex: 1,
      minWidth: 185,
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: theme.cardBackgroundColor,
    },
    activity: theme.backgroundColor,
  };
});

export default themedStyles;
