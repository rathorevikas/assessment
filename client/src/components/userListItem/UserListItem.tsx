import { Grid, IconButton, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import EditModal from "../modal/editModal/EditModal";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import "./styles.css";

const UserListItem = ({ user }: { user: any }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <>
      <Paper className="user_list_item">
        <Grid container className="user_list_options">
          <Grid item>
            <IconButton
              sx={{ zIndex: 2 }}
              onClick={() => setOpenEditModal(true)}
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              sx={{ zIndex: 2 }}
              onClick={() => setOpenDeleteModal(true)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid className="user_list_data">
          <Grid item>
            <Typography>Id:</Typography>
            <Typography> {user?.id}</Typography>
          </Grid>
          <Grid item>
            <PersonIcon />
            <Typography>{user?.name}</Typography>
          </Grid>
          <Grid item>
            <EmailIcon />
            <Typography>{user?.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
      {openEditModal && (
        <EditModal
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          id={user?.id}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}
    </>
  );
};

export default UserListItem;
