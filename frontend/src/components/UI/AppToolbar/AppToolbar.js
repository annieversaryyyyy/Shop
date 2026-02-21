import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Anonymous from "../Menu/Anonymous";
import UserMenu from "../Menu/UserMenu";

function AppToolbar() {
  const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#05111c",
          color: "white",
        }}
      >
        <Toolbar>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  "& a": {
                    color: "white",
                    textDecoration: "none",
                  },
                }}
              >
                <Link to="/">Jewelry shop Mistica</Link>
              </Typography>
            </Grid>

            <Grid item> {user ? <UserMenu user={user} /> : <Anonymous />}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default AppToolbar;
