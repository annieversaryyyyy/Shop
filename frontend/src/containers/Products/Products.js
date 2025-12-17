import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/actions/productsAction";
import ProductItem from "../../components/ProductItem/ProductItem";

function Products() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.fetchLoading);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5">Products</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/products/new">
            Add
          </Button>
        </Grid>
      </Grid>

      <Grid item container direction="row" spacing={1}>
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Products;
