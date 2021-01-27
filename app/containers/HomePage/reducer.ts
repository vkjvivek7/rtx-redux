import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  login: {
    isLoading: false,
    isError: '',
    data: null,
  },
};

const configSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    loginLoading(state) {
      state.login.isLoading = true;
      state.login.isError = '';
      state.login.data = null;
    },
    loginSuccess(state, action) {
      state.login.isLoading = false;
      state.login.isError = '';
      state.login.data = action.payload;
    },
    loginError(state, action) {
      state.login.isLoading = false;
      state.login.isError = action.payload;
      state.login.data = null;
    },
  },
});

const { actions, reducer } = configSlice;

export const { loginLoading, loginSuccess, loginError } = actions;

export default reducer;
