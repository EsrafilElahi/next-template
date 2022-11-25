import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import axios from 'axios';

const IDLE = 'idle'
const LOADING = 'loading'


const internalInitialState = {
  users: [],
  name: null,
  family: null,
  age: 25,
  error: null,
  loading: IDLE
}


export const getUsers = createAsyncThunk(
  'users/getall',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/users/');
      const data = await res.data
      return data

    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  });


export const userSlice = createSlice({
  name: 'user',
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,

    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    // get Users
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = LOADING;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = IDLE;
      state.error = action.payload.error
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = IDLE;
      state.users = action.payload;
    });
  },
})

export const { reset, setName } = userSlice.actions

export default userSlice