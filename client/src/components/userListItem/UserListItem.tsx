import { Grid2 as Grid, IconButton, Paper, Typography } from "@mui/material";
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
          <Grid>
            <IconButton
              sx={{ zIndex: 2 }}
              onClick={() => setOpenEditModal(true)}
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton
              sx={{ zIndex: 2 }}
              onClick={() => setOpenDeleteModal(true)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid className="user_list_data">
          <Grid mb={1}>
            <Typography sx={{ color: "#E3963E" }} fontWeight={"700"}>
              Id:
            </Typography>
            <Typography sx={{ color: "#36454F" }} width={"190px"}>
              {" "}
              {user?.id}
            </Typography>
          </Grid>
          <Grid mb={1}>
            <PersonIcon sx={{ color: "#E3963E" }} />
            <Typography sx={{ color: "#36454F" }}>{user?.name}</Typography>
          </Grid>
          <Grid>
            <EmailIcon sx={{ color: "#E3963E" }} />
            <Typography sx={{ color: "#36454F" }}>{user?.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
      {openEditModal && (
        <EditModal
          id={user?.id}
          userName={user?.name}
          userEmail={user?.email}
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
