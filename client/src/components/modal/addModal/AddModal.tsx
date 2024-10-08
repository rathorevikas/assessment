import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid2 as Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import useAddUser from "../../../custom-hooks/useAddUser";
import { validateEmail, validateName } from "../../../utils/common";
import { AddModalProps, Iuser } from "./typings";
import { useSelector } from "react-redux";

const AddModal = ({ openAddModal, setOpenAddModal }: AddModalProps) => {
  const { addOneUser } = useAddUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");
  const usersList = useSelector((state: any) => state.usersList.users);
  useEffect(() => {
    setEmail("");
    setName("");
    setIsError("");
  }, [openAddModal]);
  const handleClose = () => {
    setOpenAddModal(false);
  };

  const uniQueEmail = (email: string) => {
    return usersList?.find((user: Iuser) => user.email === email);
  };
  const handleSave = () => {
    console.log(uniQueEmail(email), "##$##$#$#$#$##");
    if (!uniQueEmail(email)) {
      if (validateName(name) && validateEmail(email)) {
        addOneUser(name, email)
          .then((res) => {
            if (res?.id) {
              setOpenAddModal(false);
              setName("");
              setEmail("");
            }
          })
          .catch((err) => setIsError("Something Went Wrong !"));
      } else {
        setIsError("Please Provide Vaild Inputs !");
      }
    } else {
      setIsError("Email Already Exists !");
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
      open={openAddModal}
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
          Add New User
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

export default AddModal;
