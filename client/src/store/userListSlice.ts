import { createSlice } from "@reduxjs/toolkit";
import { DeleteModalProps } from "../components/modal/deleteModal/typing";

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
    editSingleUser: (state, action) => {
      state.users = state.users?.map((user) => {
        if (user.id === action?.payload?.id) {
          user.name = action?.payload?.name ?? user.name;
          user.email = action?.payload?.email ?? user.email;
        }
        return user;
      });
    },
    addNewUser: (state, action) => {
     state.users.unshift(action?.payload);
    },
  },
});

export const { setAllUserList, deleteSingleUser, editSingleUser,addNewUser } =
  userSlice.actions;

export default userSlice.reducer;
