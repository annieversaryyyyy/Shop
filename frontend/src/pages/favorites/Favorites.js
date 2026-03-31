import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritesRequest } from "../../entities/user/model/usersActions";
import ProductItem from "../../entities/product/ui/ProductItem/ProductItem";
import Grid from "@mui/material/Grid";

function Favorites() {
  const favoriteId = useSelector((state) => state.users.favorites);
  const allProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesRequest());
  }, [dispatch]);


  const favoriteProducts = allProducts
    ? allProducts.filter((product) =>
        favoriteId.some((id) => id.toString() === product._id),
      )
    : [];

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {favoriteProducts.length > 0 ? (
        favoriteProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <Grid item xs={12}>
          <p>No favorite products yet</p>
        </Grid>
      )}
    </Grid>
  );
}

export default Favorites;
