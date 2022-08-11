import axios from 'axios';
import { FULL_SEARCH_ENDPOINT } from '../constants';

export const FullSearchApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: FULL_SEARCH_ENDPOINT,
});
