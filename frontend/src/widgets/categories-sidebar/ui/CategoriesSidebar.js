import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import DrawerContent from "./DrawerContent";
import { createCategoryRequest } from "../../../entities/category/model/categoriesActions";
import "./CategoriesSidebar.css";
import { CreateCategoryModal } from "../../../features/create-category/ui/CreateCategoryModal.js";

const drawerWidth = 240;

const CategoriesSidebar = () => {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const user = useSelector((state) => state.users.user);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isAdmin = user?.role === "admin";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCreateCategory = (data) => {
    dispatch(createCategoryRequest(data));
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

        {isAdmin && (
          <div className="categories-button">
            <IconButton className="icon-btn" onClick={handleOpen}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"
                  fill="#0F0F0F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                  fill="#0F0F0F"
                />
              </svg>
            </IconButton>
          </div>
        )}

        <CreateCategoryModal
          open={open}
          onClose={handleClose}
          onSubmit={handleCreateCategory}
        />
      </Drawer>
    </>
  );
};
export default CategoriesSidebar;
