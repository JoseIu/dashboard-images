import { createSlice } from '@reduxjs/toolkit';
import { results } from '../../db/data.json';
import { Photos } from '../../interfaces/Result.interface';

const initialState: Photos[] = results as Photos[];

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addResult: (state, action) => {
      console.log(action.payload);
      //   state.push(action.payload);
      return action.payload;
    },
  },
});
export const { addResult } = imagesSlice.actions;
export default imagesSlice.reducer;
