import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
          main: '#1a1a1a',
        },
      },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          color: "white",
          fontWeight: "600",
          padding: 5,
          marginRight: 10,
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          "&:hover": {
            background: "#c7d4ca",
          },
        },
      },
    },
  },
});
