import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  playersCount: 4,
};
export const ludoSlice = createSlice({
  initialState,
  name: "ludo",
  reducers: {
    setNumberOfPlayers: () => {},
  },
});

export default ludoSlice.reducer;
