import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Animated, Text} from 'react-native';
import I18n from '../../utils/i18n';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import moviesApi from '../../services/moviesApi';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import MovieListFooter from '../../components/MovieListFooter/MovieListFooter';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../utils/colors';
import {Picker} from '@react-native-picker/picker';

const MainScreen = (props) => {
  const [styles] = useTheme(themedStyles, 'dark');
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [type, setType] = useState('popular');
  const [showModal, setShowModal] = useState(false);
  let listRef = useRef();

  useEffect(() => {
    _getMovies();
  }, []);

  _setLanguage = (lang) => {
    setLanguage(lang);
    I18n.locale = lang;
  };

  _changeType = () => {
    setType(type === 'popular' ? 'top_rated' : 'popular');
  };

  _openModal = () => {
    setShowModal(true);
    setMovies([]);
    setCurrentPage(0);
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            _openModal();
          }}>
          <Text style={{color: colors.white}}>{I18n.t('sort')}</Text>
        </TouchableOpacity>
      ),
      title: I18n.t(type),
    });
  }, [props.navigation, type]);

  _getMovies = () => {
    console.log('type', type);
    setIsLoading(true);
    moviesApi
      .getMovies(type, currentPage + 1)
      .then((res) => {
        setMovies([...movies, ...res.data.results]);
        setCurrentPage(currentPage + 1);
      })
      .catch((err) => {
        console.log('err');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //----------------------------------------------------------------------------------------------

  return (
    <View
      style={styles.mainCointainer}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      {showModal ? (
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.3)',
            position: 'absolute',
            zIndex: 10,
            alignSelf: 'center',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                padding: '5%',
              }}
              onPress={() => {
                setShowModal(false);
                _getMovies();
              }}>
              <Text style={styles.text}>{I18n.t('close')}</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={type}
              itemStyle={styles.option}
              style={{
                width: '100%',
              }}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
              <Picker.Item label={I18n.t('popular')} value="popular" />
              <Picker.Item label={I18n.t('top_rated')} value="top_rated" />
            </Picker>
          </View>
        </View>
      ) : null}

      <FlatList
        ref={(ref) => {
          listRef = ref;
        }}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={movies}
        renderItem={({item, index, separators}) => {
          return (
            <MovieListItem
              item={item}
              index={index}
              navigation={props.navigation}
            />
          );
        }}
        numColumns={4}
        keyExtractor={(item, index) => item.id.toString()}
        onEndReached={(info) => {
          _getMovies();
        }}
        ListFooterComponentStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ListFooterComponent={<MovieListFooter isLoading={isLoading} />}
      />
    </View>
  );
};

export default MainScreen;
