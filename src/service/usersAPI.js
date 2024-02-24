import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://randomuser.me/`,
});

export const requestUsers = async page => {
  const config = {
    params: {
      page: page,
      results: 12,
      seed: 'abc',
    },
  };
  const { data } = await instance.get(`api`, config);
  return data;
};
