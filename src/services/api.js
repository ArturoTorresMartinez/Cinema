import axios from 'axios';
import I18n from '../utils/i18n';
import Config from 'react-native-config';
axios.defaults.headers.common = {
  Authorization: `bearer ${Config.BEARER_TOKEN}`,
};

const default_header = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Accept-Language': I18n.t('lang'),
};

const request_get = (url, parameters) => {
  return axios.get(
    url,
    {params: parameters},
    {
      headers: default_header,
    },
  );
};

export default {
  request_get,
};
