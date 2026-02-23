import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/actions/productsActions";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Products() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.fetchLoading);
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!user) {
  //     toast.warning("Please sign in to view products");
  //   }
  // }, [user]);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return loading ? (
    <div>loading...</div>
  ) : (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Button color="primary" component={Link} to="/products/new">
            Add
          </Button>
        </Grid>
      </Grid>

      <Grid item container direction="row" spacing={2} justifyContent="center">
        {products?.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Products;
