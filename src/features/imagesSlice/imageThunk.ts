import { createAsyncThunk } from '@reduxjs/toolkit';
import { Result } from '../../interfaces/Result.interface';

const BASE_URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getImages = createAsyncThunk('images/get', async (search: string) => {
  const response = await fetch(`${BASE_URL}/?query=${search}&client_id=${API_KEY}`);
  const data: Result = (await response.json()) as Result;
  return data;
});
