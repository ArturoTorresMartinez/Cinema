import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import colors from '../../utils/colors';
import themedStyles from './styles';
import {useTheme} from 'react-native-themed-styles';
import I18n from '../../utils/i18n';
import Config from 'react-native-config';
import * as Progress from 'react-native-progress';
import ReadMore from 'react-native-read-more-text';

const MovieHero = (props) => {
  const [styles] = useTheme(themedStyles, 'dark');
  const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

  convertMoney = (money) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  };

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: colors.yellow, marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: colors.yellow, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  };

  _handleTextReady = () => {
    // ...
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={{
          width: '100%',
          position: 'relative',
        }}
        imageStyle={{opacity: 0.4}}
        source={{
          uri: `${IMAGE_BASE_URL}/w1280/${props.movie.backdrop_path}`,
          headers: {Authorization: `Bearer ${Config.BEARER_TOKEN}`},
        }}
        onLoadEnd={() => {
          props.setIsLoading(false);
        }}
        resizeMode="cover">
        {props.isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color={styles.activity} />
          </View>
        ) : null}

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '2%',
            paddingTop: '2%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <Image
              style={{
                width: '100%',
                height: 500,
                borderRadius: 5,
              }}
              source={{
                uri: `${IMAGE_BASE_URL}/w185/${props.movie.poster_path}`,
                headers: {Authorization: `Bearer ${Config.BEARER_TOKEN}`},
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 5, padding: '2%'}}>
            <Text style={styles.title}>{props.movie.title}</Text>
            <Text style={styles.subtitle}>{props.movie.tagline}</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
              }}>
              <Progress.Circle
                size={65}
                showsText={true}
                color={colors.yellow}
                progress={props.movie.vote_average / 10}
                thickness={3}
                textStyle={{
                  fontWeight: 'bold',
                  color: colors.yellow,
                  fontSize: 18,
                }}
                animated={false}
                borderWidth={0}
                unfilledColor="rgba(199,199,199,.5)"
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: '2%',
                }}>
                <Text style={styles.text}>
                  {Math.floor(props.movie.runtime / 60) +
                    ' hr ' +
                    (props.movie.runtime % 60) +
                    ' min'}
                </Text>
                <Text style={styles.text}>
                  {' '}
                  {moment(props.movie.release_date).format('YYYY')}
                </Text>
              </View>
            </View>
            <View style={{paddingTop: 10}}>
              <ReadMore
                numberOfLines={4}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={_handleTextReady}>
                <Text style={styles.info}>{props.movie.overview}</Text>
              </ReadMore>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default MovieHero;
