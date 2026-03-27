import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#610c0c",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
  },
  typography: {
    h5: {
      fontSize: "30px",
    },
  },

  spacing: 8,
});
export default theme;
