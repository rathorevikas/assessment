import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import UserListItem from "../userListItem/UserListItem";
import "./styles.css";
import { useSelector } from "react-redux";

const UsersListView = () => {
  const usersList = useSelector((state: any) => state.usersList.users);
  return (
    <Grid className="users_list_container">
      {usersList?.length >= 1 &&
        usersList?.map((user: any) => (
          <UserListItem key={user?.id} user={user}></UserListItem>
        ))}
      {usersList?.length <= 0 && (
        <Typography variant="h4" fontWeight={"700"} component="h2" color="#E3963E">
          No Results Found !
        </Typography>
      )}
    </Grid>
  );
};

export default UsersListView;
