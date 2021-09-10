import { configureStore } from "@reduxjs/toolkit";
import skiLengthProfilesReducer from "../components/SkiLength/skiLengthProfilesSlice";

export const store = configureStore({
  reducer: {
    skiLengthProfiles: skiLengthProfilesReducer,
  },
});
