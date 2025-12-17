import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/actions/productsAction";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";


function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);
  return (
    product && (
   <Grid container justifyContent="center" mt={6}>
  <Grid item xs={12} sm={10} md={8} lg={6}>
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        gutterBottom
      >
        {product.title}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ mb: 3 }}
      >
        {product.description}
      </Typography>

      <Typography
        variant="h5"
        color="primary"
        fontWeight={600}
        textAlign="center"
        sx={{ mb: 4 }}
      >
        ${product.price}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" size="large">
          Add to cart
        </Button>

        <Button variant="outlined" size="large">
          Back
        </Button>
      </Box>
    </Paper>
  </Grid>
</Grid>

    )
  );
}

export default Product;
