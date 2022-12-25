import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export default instance;

export const ALL_COUNTRIES = import.meta.env.VITE_APP_API_URL + 'all?fields=name,capital,flags,population,region';

export const SEARCH_BY_COUNTRY = import.meta.env.VITE_APP_API_URL + 'name/';

export const FILTER_BY_CODE = import.meta.env.VITE_APP_API_URL + 'alpha?codes='