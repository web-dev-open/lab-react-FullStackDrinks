import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export const fetchBeers = () => axios.get(API_URL);
export const fetchBeerById = (id) => axios.get(`${API_URL}/${id}`);
export const fetchRandomBeer = () => axios.get(`${API_URL}/random`);
export const searchBeers = (query) => axios.get(`${API_URL}/search?q=${query}`);
export const createBeer = (beerData) => axios.post(`${API_URL}/new`, beerData);
