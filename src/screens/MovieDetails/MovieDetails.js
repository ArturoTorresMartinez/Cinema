import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Animated, Text, ActivityIndicator} from 'react-native';
import I18n from '../../utils/i18n';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import moviesApi from '../../services/moviesApi';
import MovieHero from '../../components/MovieHero/MovieHero';

const MovieDetails = (props) => {
  const [styles] = useTheme(themedStyles, 'dark');
  const [isLoading, setIsLoading] = useState(true);
  const [contentIsLoading, setContentIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  let listRef = useRef();

  useEffect(() => {
    _getMovie();
  }, []);

  _getMovie = () => {
    setIsLoading(true);
    moviesApi
      .getMovie(props.route.params.movie.id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log('err'))
      .finally(() => {
        setIsLoading(false);
      });
  };

  //----------------------------------------------------------------------------------------------

  return isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={styles.activity} />
      <Text style={styles.loadingText}>{I18n.t('loading')}</Text>
    </View>
  ) : (
    <View style={styles.mainCointainer}>
      <MovieHero
        movie={movie}
        setIsLoading={setContentIsLoading}
        isLoading={contentIsLoading}
      />
    </View>
  );
};

export default MovieDetails;
