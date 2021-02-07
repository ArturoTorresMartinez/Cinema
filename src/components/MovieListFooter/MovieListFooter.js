import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import moment from 'moment';
import colors from '../../utils/colors';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import I18n from '../../utils/i18n';

const MovieListFooter = (props) => {
  const [styles] = useTheme(themedStyles, 'dark');

  return (
    <View style={styles.container}>
      {props.isLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={styles.loader} />
          <Text style={styles.text}>{I18n.t('loading')}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default MovieListFooter;
