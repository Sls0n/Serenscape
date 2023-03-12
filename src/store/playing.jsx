import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  currentSoundId: null,
};

const isPlayingSlice = createSlice({
  name: 'isPlaying',
  initialState,
  reducers: {
    setIsPlaying(state) {
      state.isPlaying = !state.isPlaying;
    },
    setCurrentSoundId(state, action) {
      state.currentSoundId = action.payload;
    },
  },
});

export const isPlayingActions = isPlayingSlice.actions;

export default isPlayingSlice;
