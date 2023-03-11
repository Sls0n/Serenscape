import { configureStore } from '@reduxjs/toolkit';

import isPlayingSlice from './playing';

const store = configureStore({
  reducer: {
    isPlaying: isPlayingSlice.reducer,
  },
});

export default store;
