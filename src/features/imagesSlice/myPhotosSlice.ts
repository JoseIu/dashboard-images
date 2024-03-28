import { createSlice } from '@reduxjs/toolkit';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
const initialState: MyPhoTos[] = [];

const myPhotosSlice = createSlice({
  name: 'myPhotos',
  initialState,
  reducers: {
    addImage: (state, action) => {
      return [...state, action.payload];
    },
    deleteImage: (state, action) => {
      return state.filter((image) => image.id !== action.payload);
    },
  },
});

export const { deleteImage, addImage } = myPhotosSlice.actions;

export default myPhotosSlice.reducer;
