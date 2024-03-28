import { createSlice } from '@reduxjs/toolkit';
import { MyPhoyos } from '../../interfaces/myPhotos.interface';
const initialState: MyPhoyos[] = [];

const myPhotosSlice = createSlice({
  name: 'myPhotos',
  initialState,
  reducers: {
    deleteImage: (state, action) => {},
  },
});

export const { deleteImage } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
