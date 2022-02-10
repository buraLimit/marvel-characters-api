import React, { useState } from "react";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { cardStyles } from "./styles";
import ModalWindow from "./Modal";
import {
  AppBar,
  Card,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";




const Favorites = () => {
  const [open, setOpen] = useState(false);
  const classes = cardStyles();
  const photos = JSON.parse(localStorage.getItem("favorites"));
  const [photoUrl, setPhotoUrl] = useState("");
  const [favoriteAdded, setFavoriteAdded] = useState(false);

  const handleModal = () => setOpen(!open);

  const handleFavorite = (imageUrl) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      favorites.splice(favorites.indexOf(imageUrl), 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteAdded(!favoriteAdded);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar sx={{ backgroundColor: "#f2f2f2" }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item container xs={4}>
              <CameraIcon sx={{ mr: 2, fill: "black" }} />
              <Typography variant="h6" color="black" noWrap>
                My Flickr Gallery
              </Typography>
            </Grid>
            <Link to={"/"}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {" "}
                <Typography fontSize={"15px"}>Home</Typography>
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {open && (
          <ModalWindow
            handleModal={handleModal}
            openModal={open}
            imageUrl={photoUrl}
          />
        )}

        <Grid container spacing={3} justifyContent={"center"} sx={{ p: 5 }}>
          {photos &&
            photos.map((photo, index) => {
              return (
                <Grid item container key={photo.id} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <IconButton
                      className={classes.favChip}
                      onClick={() => handleFavorite(photo)}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <CardMedia
                      component="img"
                      className={classes.img}
                      image={photo}
                      alt="random"
                      onClick={() => {
                        handleModal();
                        setPhotoUrl(photo);
                      }}
                    />
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </main>
    </div>
  );
};

export default Favorites;
