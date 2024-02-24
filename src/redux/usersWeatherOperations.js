import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestUsers } from 'service/usersAPI';
import { requestWeather } from 'service/weatherAPI';

export const usersThunk = createAsyncThunk(
  'users/get',
  async (page, thunkAPI) => {
    try {
      const { results } = await requestUsers(page);
      const latitude = results.map(user => {
        const result = [];
        result.push(user.location.coordinates.latitude);
        return result;
      });

      const longitude = results.map(user => {
        const result = [];
        result.push(user.location.coordinates.longitude);
        return result;
      });

      const weather = await requestWeather(
        latitude.join(','),
        longitude.join(',')
      );

      const data = results.map((user, index) => {
        return { ...user, ...weather[index], favourite: false };
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreUsersThunk = createAsyncThunk(
  'users/loadMore',
  async (page, thunkAPI) => {
    try {
      const { results } = await requestUsers(page);
      const latitude = results.map(user => {
        const result = [];
        result.push(user.location.coordinates.latitude);
        return result;
      });
      const longitude = results.map(user => {
        const result = [];
        result.push(user.location.coordinates.longitude);
        return result;
      });

      const weather = await requestWeather(
        latitude.join(','),
        longitude.join(',')
      );

      const data = results.map((user, index) => {
        return { ...user, ...weather[index] };
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
