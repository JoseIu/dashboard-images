import { createAsyncThunk } from '@reduxjs/toolkit';
import { Result } from '../../interfaces/Result.interface';

const BASE_URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL_RANDOM = import.meta.env.VITE_URL_RANDOM;

export const getImages = createAsyncThunk('images/get', async (search: string) => {
  const response = await fetch(`${BASE_URL}/?query=${search}&client_id=${API_KEY}`);
  const data: Result = (await response.json()) as Result;
  return data;
});

const params = {
  count: 10,
};

export const getImagesRandom = createAsyncThunk('images/getRandom', async () => {
  const response = await fetch(`${BASE_URL_RANDOM}/random?count=${params.count}&client_id=${API_KEY}`);
  console.log(response);
  const data: Result = await response.json();

  return data;
});
