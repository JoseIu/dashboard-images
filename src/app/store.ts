import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { imagesSlice } from '../features/imagesSlice/imagesSlice';
import myPhotosReducer from '../features/myPhotosSlice/myPhotosSlice';

export const store = configureStore({
  reducer: {
    images: imagesSlice.reducer,
    myPhoto: myPhotosReducer,
  },
});

export type RooState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RooState, unknown, Action<string>>;
