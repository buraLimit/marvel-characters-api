import { makeStyles } from "@mui/styles";

export const cardStyles = makeStyles({
  root: {
    backgroundColor: "#f2f2f2",
    minHeight: '100vh',
    height: "100%",
  },
  card: {
    "&:hover": {
      backgroundColor: "black",
      opacity: "0.8",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px",
    position: "relative",
    height: "100%"
  },
  img: {
    position: "relative",
    objectFit: "cover",
    cursor: "pointer",
    height: "100% ",
    width: "100%",
    
  },
  favChip: {
    float: "right",
    position: "absolute !important",
    right: "2px",
    top: "5px",
    zIndex: "1000",
    color: "red !important",
  },
  button: {
      borderRadius: '30px !important',
  }
});
