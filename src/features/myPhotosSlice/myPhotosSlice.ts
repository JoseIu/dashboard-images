import { createSlice } from '@reduxjs/toolkit';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';

interface SavedImageState {
  myPhotos: MyPhoTos[];
  selectedImage: string | null;
}
// const initialState: MyPhoTos[] = [];
const initialState: SavedImageState = {
  myPhotos: [],
  selectedImage: null,
};

const myPhotosSlice = createSlice({
  name: 'myPhotos',
  initialState,
  reducers: {
    addImage: (state, action) => {
      console.log(action.payload);
      state.myPhotos.push(action.payload);
    },
    addImageFromStorage: (state, action) => {
      state.myPhotos = action.payload;
    },
    deleteImage: (state, action) => {
      state.myPhotos = state.myPhotos.filter((image) => image.id !== action.payload);
    },
    editImage: (state, action) => {
      const { id, edit } = action.payload;
      const finIndex = state.myPhotos.findIndex((image) => image.id === id);

      if (finIndex !== -1) {
        state.myPhotos[finIndex].description = edit;
      }
    },
    selectImageById: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { deleteImage, addImage, selectImageById, editImage, addImageFromStorage } =
  myPhotosSlice.actions;

export default myPhotosSlice.reducer;
