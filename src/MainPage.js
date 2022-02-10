import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { cardStyles } from "./styles";
import SearchBar from "./SearchBar";
import ModalWindow from "./Modal";
import {
  Pagination,
  AppBar,
  Card,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
  Box,
  CircularProgress,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import { getDefaultCharacters,getSearchedCharacters } from "./photos/state/photosActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MainPage = ({characters}) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const classes = cardStyles();
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();
  const [favoriteAdded, setFavoriteAdded] = useState(false);
  const perPage = 20



  useEffect(() => {
    if (!!characters.results.length) {
      setLoading(false);
    }
    
  }, [characters]);

  useEffect(() => {
    if (!searchQuery) {
      setLoading(true);
      getDefaultCharacters(dispatch, perPage, (page-1)*perPage); //dispatch, limit, offset
    }
    
   

    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        setLoading(true);
        const search = searchQuery.toString().replace(" ", "%20");
        getSearchedCharacters(dispatch, perPage, (page-1)*perPage, search); //dispatch, limit, offset, searchQuery
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, searchQuery, page]);

  
  
  const handleModal = () => setOpen(!open);
  const tags = ["Spider-man", "Hulk", "Iron man"];

  const handleFavorite = (imageUrl) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      if (!checkIsInFavorites(imageUrl)) {
        favorites.push(imageUrl);
      } else {
        favorites.splice(favorites.indexOf(imageUrl), 1);
      }
    } else {
      favorites = [];
      favorites.push(imageUrl);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteAdded(!favoriteAdded);
  };

  const checkIsInFavorites = (imgUrl) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    let favorite;
    if (favorites) {
      favorite = favorites.find((image) => {
        return image === imgUrl;
      });
    }
    if (favorite) {
      return true;
    }
    return false;
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar sx={{ backgroundColor: "#f2f2f2" }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item container xs={4}>
              <CameraIcon sx={{ mr: 2, fill: "black" }} />
              <Typography variant="h6" color="black" noWrap>
                Marvel Characters
              </Typography>
            </Grid>
            <Link to={"/favorites"}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Typography fontSize={"15px"}>Favorites</Typography>
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

        <Box sx={{ p: 5 }}>
          <SearchBar
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          <Grid container item justifyContent={"start"} sx={{ py: 1, px: 3 }}>
            {tags.map((tag) => (
              <Chip
                label={tag}
                color="primary"
                onClick={() => setSearchQuery(tag)}
              />
            ))}
          </Grid>
        </Box>

        <Grid container spacing={3} justifyContent={"center"} sx={{ p: 5 }}>
          {loading && <CircularProgress />}
          {!!characters.results.length &&
            !loading &&
            characters.results.map((character) => {
              const photoUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
             // if(!photoUrl.includes("image_not_available")){ 
               //if uncomment application would not display characters without image
                return (
                  <Grid item container key={character.id} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <IconButton
                        className={classes.favChip}
                        onClick={() => handleFavorite(photoUrl)}
                      >
                        {checkIsInFavorites(photoUrl) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>

                      <CardMedia
                        component="img"
                        className={classes.img}
                        image={photoUrl}
                        alt="random"
                        onClick={() => {
                          handleModal();
                          setPhotoUrl(photoUrl);
                        }}
                      />
                    </Card>
                  </Grid>
                  )
               // }
              
            })}
        </Grid>
      </main>
      {/* Footer */}
      <Grid
        container
        justifyContent={"center"}
        sx={{ p: 5 }}
        component="footer"
      >
        <Pagination
          count={parseInt(characters.total/perPage)}
          color="primary"
          size="large"
          textColor="white"
          page={page}
          onChange={(e, selectedPage) => setPage(selectedPage)}
        />
      </Grid>
      {/* End footer */}
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(mapStateToProps)(MainPage);
