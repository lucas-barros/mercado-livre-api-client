import fetch from 'isomorphic-fetch';

const BASE_URL = 'https://api.mercadolibre.com/sites/MLB';
const LIMIT = 30;
class MLService {
  static search = async payload => {
    const { searchString = '', offset = 0 } = payload;
    const params = `q=${searchString}&limit=${LIMIT}&offset=${offset}`;
    const response = await fetch(`${BASE_URL}/search?${params}`);
    const json = await response.json();

    return json;
  };
}
export { MLService, LIMIT };
