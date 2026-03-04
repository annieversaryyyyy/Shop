import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesSidebar from "../../categories-sidebar/ui/CategoriesSidebar";

const ProductsLayout = ({ children }) => {
  const user = useSelector((state) => state.users.user);

  return (
    <div className="productItem">
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingLeft: { sm: "240px" } }}
      >
        <Grid item >
          <Typography 
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 4,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Our Collection
          </Typography>
        </Grid>

        {user?.role === "admin" && (
          <Grid item>
            <Button
              component={Link}
              to="/products/new"
              sx={{
                color: "#8b1515",
                border: "2px solid #8b1515",
                borderRadius: 2,
                px: 3,
                fontWeight: 600,
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#8b1515",
                  color: "#fff",
                },
              }}
            >
              Add
            </Button>
          </Grid>
        )}
      </Grid>
      <CategoriesSidebar />
      <Box sx={{ paddingLeft: { sm: "240px" } }}>{children}</Box>
    </div>
  );
};
export default ProductsLayout;
