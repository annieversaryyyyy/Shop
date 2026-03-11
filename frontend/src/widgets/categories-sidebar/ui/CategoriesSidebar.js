import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import DrawerContent from "./DrawerContent";
import { fetchCategoriesRequest } from "../../../entities/category/model/categoriesActions";

const drawerWidth = 240;

const CategoriesSidebar = () => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{

          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContent categories={categories} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block", zIndex: 0, position: "relative" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#e9e4e4",
            color: "#000000",
          },
        }}
        open
      >
        <DrawerContent categories={categories} />
      </Drawer>
    </>
  );
};
export default CategoriesSidebar;

