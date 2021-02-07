import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import colors from '../../utils/colors';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import I18n from '../../utils/i18n';
import Config from 'react-native-config';

const MovieListItem = (props) => {
  const [styles] = useTheme(themedStyles, 'dark');
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

  return (
    <TouchableOpacity
      style={styles.container}
      key={props.item.id}
      onPress={() => {
        props.navigation.navigate('Movie', {
          movie: props.item,
        });
      }}>
      <Image
        style={{
          width: '100%',
          height: 280,
          minWidth: 185,
          position: 'relative',
        }}
        source={{
          uri: `${IMAGE_BASE_URL}/w185/${props.item.poster_path}`,
          headers: {Authorization: `Bearer ${Config.BEARER_TOKEN}`},
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default MovieListItem;
