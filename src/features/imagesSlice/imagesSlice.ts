import { createSlice } from '@reduxjs/toolkit';
import initialImages from '../../db/data.json';
import { Photos } from '../../interfaces/Result.interface';
import { RandomResult } from '../../interfaces/randomResult';
import { getImages, getImagesRandom } from './imageThunk';

interface ImagesState {
  images: Photos[] | RandomResult[];
  page: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ImagesState = {
  images: initialImages as Photos[],
  page: 0,
  loading: 'idle',
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},

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

    builder.addCase(getImagesRandom.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(getImagesRandom.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.images = action.payload;
    });
    builder.addCase(getImagesRandom.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});
