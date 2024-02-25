import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { usersThunk, loadMoreUsersThunk } from './usersWeatherOperations';
import Notiflix from 'notiflix';

const INITIAL_STATE = {
  users: [],
  favouriteUsers: null,
  modalData: null,
  page: 1,
  isLoading: false,
  error: null,
};

const userWeatherSlice = createSlice({
  name: 'usersWeather',
  initialState: INITIAL_STATE,
  reducers: {
    handlFavouriteAdd(state, action) {
      state.favouriteUsers
        ? (state.favouriteUsers = [
            ...state.favouriteUsers,
            { ...action.payload, favourite: true },
          ])
        : (state.favouriteUsers = [{ ...action.payload, favourite: true }]);
      Notiflix.Notify.success('User Saved');
    },
    handlFavouriteDell(state, action) {
      state.favouriteUsers = state.favouriteUsers.filter(
        user => user.login.uuid !== action.payload.login.uuid
      );
      state.users = state.users.map(user => {
        if (user.login.uuid === action.payload.login.uuid)
          user.favourite = false;
        return user;
      });
      Notiflix.Notify.failure('User Removed');
    },
    handlModalData(state, action) {
      state.modalData = state.users.find(
        user => user.login.uuid === action.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(usersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.page = state.page + 1;
        state.error = null;
      })
      .addCase(loadMoreUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = [...state.users, ...action.payload];
        state.page = state.page + 1;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(usersThunk.pending, loadMoreUsersThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(usersThunk.rejected, loadMoreUsersThunk.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { handlFavouriteAdd, handlFavouriteDell, handlModalData } =
  userWeatherSlice.actions;
export const userWeatherReducer = userWeatherSlice.reducer;
