import * as types from "./actionTypes";
import axios from "axios";

const API_KEY = '0059406ce9b0fb7baf32e87257d23e58'
const HASH = 'ad21f0bc899ec1bc7d2c9fc6b85cd956'
const TS = '1'


export const getDefaultCharacters = (dispatch, limit, offset) => {
  (async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=${TS}&apikey=${API_KEY}&hash=${HASH}`

        );
        
      dispatch({
        type: types.GET_DEFAULT_CHARACTERS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  })();
};

export const getSearchedCharacters = (dispatch, limit, offset, searchQuery) => {
  (async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchQuery}&limit=${limit}&offset=${offset}&ts=${TS}&apikey=${API_KEY}&hash=${HASH}`

        );
       
      dispatch({
        type: types.GET_SEARCHED_CHARACTERS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  })();
};
