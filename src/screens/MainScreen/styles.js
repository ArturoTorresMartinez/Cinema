import {styleSheetFactory} from '../../utils/theme';
import {Dimensions} from 'react-native';

const height = Math.round(Dimensions.get('window').height);

const themedStyles = styleSheetFactory((theme) => {
  return {
    mainCointainer: {
      height: '100%',
      backgroundColor: theme.backgroundColor,
    },
    header: {
      color: theme.textColor,
    },
    optionContainer: {
      backgroundColor: theme.backgroundColor,
      height: 'auto',
      width: '90%',
      marginTop: 20,
      borderRadius: 20,
    },
    option: {
      color: theme.textColor,
    },
    text: {
      color: theme.textColor,
    },
    picker: {
      width: '100%',
      color: theme.textColor
    }
  };
});

export default themedStyles;
