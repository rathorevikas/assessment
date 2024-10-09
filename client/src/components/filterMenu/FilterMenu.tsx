import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid2 as Grid, IconButton, TextField } from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SyncIcon from "@mui/icons-material/Sync";
import AddModal from "../modal/addModal/AddModal";
import { setAllUserList } from "../../store/userListSlice";
import { API_DOMAIN } from "../../utils/constant";
import "./styles.css";

const FilterMenu = () => {
  const [isSort, setIsSort] = useState(false);
  const [originalUserList, setOriginalUserList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOriginalUserList().then((res) => {
      setOriginalUserList(res);
    });
  }, []);

  async function fetchOriginalUserList() {
    const res = await fetch(API_DOMAIN);
    const data = await res.json();
    return data?.users;
  }
  const [openModal, setOpenModal] = useState(false);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const filteredUsers = originalUserList?.filter(
      (user: any) =>
        user.name.includes(searchTerm) || user.email.includes(searchTerm)
    );
    dispatch(setAllUserList(filteredUsers));
  };

  const sortHandler = () => {
    let sortUserList = [...originalUserList];
    sortUserList?.sort((a: any, b: any) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    dispatch(setAllUserList(sortUserList));
    setIsSort(true);
  };

  const resetHandler = () => {
    dispatch(setAllUserList(originalUserList));
    setIsSort(false);
  };

  return (
    <>
      <Grid container className="filter_container">
        <Grid>
          <Button
            variant="contained"
            data-testid="add_new_user_button"
            onClick={() => setOpenModal(true)}
          >
            Add New User
          </Button>
        </Grid>
        <Grid className="filter_right_section" mt={{ xs: 2, md: 0 }}>
          <TextField label="Search" onChange={handleSearch} />
          {isSort ? (
            <IconButton sx={{ ml: 2 }} onClick={resetHandler}>
              <SyncIcon></SyncIcon>
            </IconButton>
          ) : (
            <IconButton sx={{ ml: 2 }} onClick={sortHandler}>
              <SortByAlphaIcon></SortByAlphaIcon>
            </IconButton>
          )}
        </Grid>
      </Grid>
      <AddModal openAddModal={openModal} setOpenAddModal={setOpenModal} />
    </>
  );
};

export default FilterMenu;
