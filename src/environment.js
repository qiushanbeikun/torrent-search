export const API_ENDPOINT = process.env.NODE_ENV === 'production'
  ? 'https://torrent-search-api.herokuapp.com/'
  : 'http://localhost:4000';
