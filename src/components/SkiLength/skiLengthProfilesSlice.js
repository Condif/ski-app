import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL, HTTP_STATUS } from "../../store/constants";

const initialState = {
  profiles: [],
  status: null,
};
const namespace = "skiLengthProfiles";
export const getSkiLengthProfiles = createAsyncThunk(
  `${namespace}/getSkiLengthProfiles`,
  async () => {
    return fetch(URL + "ski-length-profiles").then((res) => res.json());
  }
);

export const skiLengthProfilesSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
  },
  extraReducers: {
    [getSkiLengthProfiles.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [getSkiLengthProfiles.fulfilled](state, { payload }) {
      state.status = HTTP_STATUS.FULFILLED;
      state.profiles = payload;
    },
    [getSkiLengthProfiles.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
    },
  },
});

// export const {  } = skiLengthProfilesSlice.actions

export default skiLengthProfilesSlice.reducer;
