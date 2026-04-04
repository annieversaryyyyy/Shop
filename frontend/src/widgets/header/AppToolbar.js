import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Anonymous from "./menu/Anonymous";
import UserMenu from "./menu/UserMenu";
import logo from "../../shared/assets/misticalogo.png";
import "./AppToolbar.css";

function AppToolbar() {
  const user = useSelector((state) => state.users.user);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Toolbar sx={{ maxHeight: 70 }}>
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
                <Link to="/">
                  <img src={logo} alt="logo" className="logo" />
                </Link>
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
