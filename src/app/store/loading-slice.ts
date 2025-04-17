import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  isloading: boolean;
}

const initialState: CounterState = {
  isloading: true,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loadingOn: (state) => {
      state.isloading = true;
    },
    loadingOff: (state) => {
      state.isloading = false;
    },
  },
});

export const { loadingOn, loadingOff } = loadingSlice.actions;

export default loadingSlice.reducer;
