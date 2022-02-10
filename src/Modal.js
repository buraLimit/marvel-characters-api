import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
  },
});

const ModalWindow = ({ handleModal, openModal, imageUrl }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal open={openModal} onClose={handleModal}>
        <Box className={classes.content}>
          <CardMedia
            component="img"
            sx={{
              // 16:9
              objectFit: "cover",
            }}
            image={imageUrl}
            alt="random"
          />
          <Box></Box>
        </Box>
      </Modal>
    </div>
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalWindow;
