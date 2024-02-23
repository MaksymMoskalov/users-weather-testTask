import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  allCarsThunk,
  loadMoreCarsThunk,
  exactCarThunk,
} from './autosOperations';
import { favouriteMatcher } from 'service/matcher';

const INITIAL_STATE = {
  cars: [],
  carData: null,
  favouriteCars: null,
  brandFilter: { value: '', label: 'All' },
  priceFilter: { value: '', label: 'To $' },
  page: 1,
  fact: 0,
  total: 25,
  isLoading: false,
  error: null,
};

const autoSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    handlModalClose(state, action) {
      state.carData = action.payload;
    },
    handlFavouriteAdd(state, action) {
      state.favouriteCars
        ? (state.favouriteCars = [
            ...state.favouriteCars,
            { ...action.payload, favourite: true },
          ])
        : (state.favouriteCars = [{ ...action.payload, favourite: true }]);
      if (state.favouriteCars) {
        state.cars = favouriteMatcher(state.cars, state.favouriteCars);
      }
    },
    handlFavouriteDell(state, action) {
      state.favouriteCars = state.favouriteCars.filter(
        car => car.id !== action.payload.id
      );
      state.cars = state.cars.map(car => {
        if (car.id === action.payload.id) car.favourite = false;
        return car;
      });
      if (state.favouriteCars) {
        state.cars = favouriteMatcher(state.cars, state.favouriteCars);
      }
    },
    handlBrandFilter(state, action) {
      state.brandFilter = action.payload;
      state.fact = 0;
    },
    handlResetCatalog(state, _) {
      state.cars = [];
      state.page = 1;
      state.fact = 0;
      state.brandFilter = { value: '', label: 'All' };
      state.priceFilter = { value: '', label: 'To $' };
      state.carData = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(allCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [
          ...action.payload.map(car => {
            return (car = { ...car, favourite: false });
          }),
        ];
        if (state.favouriteCars) {
          state.cars = favouriteMatcher(state.cars, state.favouriteCars);
        }
        state.page = state.page + 1;
        state.fact = 12;
        state.error = null;
      })
      .addCase(loadMoreCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...action.payload];
        if (state.favouriteCars) {
          state.cars = favouriteMatcher(state.cars, state.favouriteCars);
        }
        state.fact = state.fact + 12;
        state.page = state.page + 1;
        state.error = null;
      })
      .addCase(exactCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carData = action.payload;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          allCarsThunk.pending,
          loadMoreCarsThunk.pending,
          exactCarThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          allCarsThunk.rejected,
          loadMoreCarsThunk.rejected,
          exactCarThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const {
  handlModalClose,
  handlFavouriteAdd,
  handlFavouriteDell,
  handlBrandFilter,
  handlResetCatalog,
} = autoSlice.actions;
export const autoReducer = autoSlice.reducer;
