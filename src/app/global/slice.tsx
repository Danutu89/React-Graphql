import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { reducers as userReducer } from './user/slice';
import { ContainerState } from './types';

// The initial state of the Home container
export const initialState: ContainerState = {
  user: {
    token: null,
    refreshToken: null,
    payload: null,
    isLoggedIn: false,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    ...userReducer,
  },
});

export const { actions: appActions, reducer, name: sliceKey } = appSlice;
