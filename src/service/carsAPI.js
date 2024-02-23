import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://65ce03a9c715428e8b3fbbfc.mockapi.io/`,
});

export const requestAllCars = async (page = 1) => {
  const config = {
    params: {
      p: page,
      l: 12,
    },
  };
  const { data } = await instance.get(`advert`, config);
  return data;
};

export const requestCar = async id => {
  const { data } = await instance.get(`advert/${id}`);
  return data;
};
