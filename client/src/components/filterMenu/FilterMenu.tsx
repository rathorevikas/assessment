import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid2 as Grid, TextField } from "@mui/material";
import AddModal from "../modal/addModal/AddModal";
import { setAllUserList } from "../../store/userListSlice";
import "./styles.css";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state: any) => state.usersList.users);
  let originalUserList: any[] = [];
  useEffect(() => {
    originalUserList = [...usersList];
  }, []);
  console.log(originalUserList, "searchterm2");
  const [openModal, setOpenModal] = useState(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    console.log(originalUserList, "searchterm");
    const filteredUsers = originalUserList?.filter(
      (user: any) =>
        user.name.includes(searchTerm) || user.email.includes(searchTerm)
    );
    dispatch(setAllUserList(filteredUsers));
  };
  return (
    <>
      <Grid container className="filter_container">
        <Grid>
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            Add New User
          </Button>
        </Grid>
        <Grid>
          <TextField label="Search" onChange={handleSearch} />
        </Grid>
      </Grid>
      <AddModal openAddModal={openModal} setOpenAddModal={setOpenModal} />
    </>
  );
};

export default FilterMenu;
