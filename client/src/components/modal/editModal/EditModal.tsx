import { useEffect, useState } from "react";
import { EditModalProps } from "./typing";
import { Box, Button, Grid2 as Grid, Modal, TextField, Typography } from "@mui/material";
import useEditUser from "../../../custom-hooks/useEditUser";
import { validateEmail, validateName } from "../../../utils/common";

const EditModal = ({
  id,
  userName,
  userEmail,
  openEditModal,
  setOpenEditModal,
}: EditModalProps) => {
  const { editOneUser } = useEditUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");
  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
  }, []);
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleSave = () => {
    if (id && validateName(name) && validateEmail(email)) {
      editOneUser(id, name, email).then((res) => {
        if (res?.id) {
          setOpenEditModal(false);
        }
      }).catch(err =>  setIsError("Something Went Wrong !"))
    } else {
      setIsError("Please Provide Vaild Inputs !");
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={openEditModal}
      onClose={handleClose}
      aria-labelledby="Delete-modal"
      aria-describedby="Delete-modal-description"
    >
      <Box sx={style}>
      <Typography
          id="Edit-modal-title"
          variant="h6"
          fontWeight={"700"}
          component="h2"
        >
          Edit User Details
        </Typography>
        <TextField
          sx={{ my: 2 }}
          id="name-field"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          id="email-field"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {isError && (
          <Typography
            id="Delete-modal-description"
            sx={{ color: "red", mt: 2 }}
          >
            {isError}
          </Typography>
        )}
        <Grid className="button_group">
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EditModal;
