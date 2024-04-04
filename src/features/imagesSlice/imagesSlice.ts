import { createSlice } from '@reduxjs/toolkit';
import { Photos } from '../../interfaces/Result.interface';
import { getImages } from './imageThunk';

interface ImagesState {
  images: Photos[];
  page: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ImagesState = {
  images: [],
  page: 0,
  loading: 'idle',
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addResult: (state, action) => {
      console.log(action.payload);
      //   state.push(action.payload);
      return action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(getImages.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.images = action.payload.results;
    });
    builder.addCase(getImages.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
export const { addResult } = imagesSlice.actions;
