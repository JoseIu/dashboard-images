import { configureStore } from '@reduxjs/toolkit';
import { imagesSlice } from '../features/imagesSlice/imagesSlice';
import myPhotosReducer from '../features/imagesSlice/myPhotosSlice';

export const store = configureStore({
  reducer: {
    images: imagesSlice.reducer,
    myPhoto: myPhotosReducer,
  },
});

export type RooState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
