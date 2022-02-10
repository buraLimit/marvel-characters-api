import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 5px",
        display: "flex",
        alignItems: "center",
        mx: 2,
        my: 1,
        borderRadius: "30px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
          opacity: "0.75",
        },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Images"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
