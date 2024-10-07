import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [] as { id: string; name: string; email: string }[],
};

const userSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setAllUserList: (state, action) => {
      state.users = [...action.payload];
    },
    deleteSingleUser: (state, action) => {
      state.users = state.users.filter((user) => user?.id !== action?.payload);
    },
  },
});

export const { setAllUserList,deleteSingleUser } = userSlice.actions;

export default userSlice.reducer;
