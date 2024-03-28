import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../features/imagesSlice/imagesSlice';
import myPhotosReducer from '../features/imagesSlice/myPhotosSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    myPhoto: myPhotosReducer,
  },
});

export type RooState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
