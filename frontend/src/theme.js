import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
