import React from "react";
import { Grid } from "@mui/material";
import UserListItem from "../userListItem/UserListItem";
import './styles.css'
import { useSelector } from "react-redux";

const UsersListView = () => {
  const usersList = useSelector ((state: any) => state.usersList.users);
  return (
    <Grid className="users_list_container">
      {usersList?.map((user :any) => <UserListItem key={user?.id} user={user}></UserListItem>)}
    </Grid>
  );
};

export default UsersListView;
