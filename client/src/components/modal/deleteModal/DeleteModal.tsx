import { useState } from "react";
import { Box, Button,  Grid2 as Grid, Modal, Typography } from "@mui/material";
import useDeleteUser from "../../../custom-hooks/useDeleteUser";
import { DeleteModalProps } from "./typing";
import "./styles.css";

const DeleteModal = ({
  id,
  openDeleteModal,
  setOpenDeleteModal,
}: DeleteModalProps) => {
  const [isError, setIsError] = useState(false);
  const { deleteOneUser } = useDeleteUser();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    display:'flex',
    flexDirection:'column',
    alignItem:'center',
    transform: "translate(-50%, -50%)",
    width: "max-content",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => {
    setOpenDeleteModal(false);
  };
  const handleDelete = () => {
    deleteOneUser(id)
      .then((res) => {
        if (res?.success) {
          setOpenDeleteModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };
  return (
    <Modal
      open={openDeleteModal}
      onClose={handleClose}
      aria-labelledby="Delete-modal"
      aria-describedby="Delete-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="Delete-modal-title"
          variant="h6"
          fontWeight={"700"}
          component="h2"
        >
          Are you Sure ?
        </Typography>
        <Typography id="Delete-modal-description" sx={{ mt: 2 }}>
          You will not be able to recover it !
        </Typography>
        {isError && (
          <Typography
            id="Delete-modal-description"
            sx={{ color: "red", mt: 2 }}
          >
            Something went wrong, please try later !
          </Typography>
        )}
        <Grid className="button_group">
          <Button variant="contained" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
