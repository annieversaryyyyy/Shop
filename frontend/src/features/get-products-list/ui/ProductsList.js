import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ProductsList.css";
import { fetchProducts } from "../../../entities/product/model/productsActions";
import ProductsLayout from "../../../widgets/ products-layout/ui/ProductsLayout";
import ProductItem from "../../../entities/product/ui/ProductItem/ProductItem";

function ProductsList() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.fetchLoading);
  const products = useSelector((state) => state.products.products);
  const query = useLocation().search;

  useEffect(() => {
    dispatch(fetchProducts(query));
  }, [dispatch, query]);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="productsContainer">
      <ProductsLayout>
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            container
            direction="row"
            spacing={2}
            justifyContent="center"
          >
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
      </ProductsLayout>
    </div>
  );
}

export default ProductsList;
