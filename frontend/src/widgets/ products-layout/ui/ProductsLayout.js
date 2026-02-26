import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CategoriesSidebar from "../../categories-sidebar/ui/CategoriesSidebar";

const ProductsLayout = ({ children }) => {
  return (
    <div className="productItem">
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingLeft: { sm: "240px" } }}
      >
        <Grid item>
          <Typography variant="h5">Products</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/products/new">
            Add
          </Button>
        </Grid>
      </Grid>
      <CategoriesSidebar />
      <Box sx={{ paddingLeft: { sm: "240px" } }}>{children}</Box>
    </div>
  );
};
export default ProductsLayout;
