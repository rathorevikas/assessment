import React, { useEffect } from "react";
import UserListView from "./components/usersListView/UsersListView";
import useFetchAllUsers from "./custom-hooks/useFetchAllUsers";
import { Grid } from "@mui/material";
import "./App.css";
import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const { fetchAllUsers } = useFetchAllUsers();
  useEffect(() => {
    fetchAllUsers()
  }, []);
 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to DoseSpot</h1>
      </header>

      {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      <Grid className="usersList_container">
        <UserListView></UserListView>
      </Grid>
      <footer></footer>
    </div>
  );
};
