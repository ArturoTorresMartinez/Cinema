import {styleSheetFactory} from '../../utils/theme';
import {Dimensions} from 'react-native';

const height = Math.round(Dimensions.get('window').height);

const themedStyles = styleSheetFactory((theme) => {
  return {
    mainCointainer: {
      height: '100%',
      backgroundColor: theme.backgroundColor,
      justifyContent: 'flex-end',
      padding: '5%',
    },
    title: {
      color: theme.textColor,
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'System',
    },
    subtitle: {
      color: theme.lightTextColor,
      fontSize: 18,
      fontFamily: 'System',
      marginBottom: 30,
    },
    optionContainer: {
      backgroundColor: theme.backgroundColor,
      height: 'auto',
      width: '100%',
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
      color: theme.textColor,
    },
    loginContainer: {
      backgroundColor: theme.textColor,
      padding: '5%',
      marginBottom: 25,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    login: {
      color: theme.backgroundColor,
      fontWeight: 'bold',
      fontSize: 16,
    },
  };
});

export default themedStyles;
