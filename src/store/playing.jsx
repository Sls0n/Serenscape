import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
};

const isPlayingSlice = createSlice({
  name: 'isPlaying',
  initialState,
  reducers: {
    setIsPlaying(state, action) {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const isPlayingActions = isPlayingSlice.actions;

export default isPlayingSlice;
