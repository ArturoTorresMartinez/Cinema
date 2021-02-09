import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Alert, Text, TouchableOpacity} from 'react-native';
import I18n from '../../utils/i18n';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import {Picker} from '@react-native-picker/picker';

const Login = (props) => {
  const [styles] = useTheme(themedStyles, 'dark');
  const [lang, setLang] = useState('en');

  _setLanguage = (lang) => {
    setLang(lang);
    I18n.locale = lang;
  };

  //----------------------------------------------------------------------------------------------

  return (
    <View style={styles.mainCointainer}>
      <Text style={styles.title}>{I18n.t('welcome')}</Text>
      <Text style={styles.subtitle}>{I18n.t('description')}</Text>
      <View style={styles.optionContainer}>
        <Picker
          selectedValue={lang}
          itemStyle={styles.option}
          iosHeader={I18n.t('select_language')}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => {
            _setLanguage(itemValue);
          }}>
          <Picker.Item label={I18n.t('english')} value="en" />
          <Picker.Item label={I18n.t('spanish')} value="es" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text style={styles.login}>{I18n.t('login')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
