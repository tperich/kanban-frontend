import axios from 'axios';
import config from '../config';

class HttpService {
  constructor(clientConfig = {}) {
    this.client = axios.create(clientConfig);

    this.client.defaults.headers.post = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }
}

const clientConfig = {
  baseURL: config.BASE_API_URL
};

export default new HttpService(clientConfig);
