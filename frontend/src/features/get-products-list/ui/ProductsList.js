import Grid from "@mui/material/Grid";
import { Box, CircularProgress, Typography } from "@mui/material";
import "./ProductsList.css";
import ProductItem from "../../../entities/product/ui/ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { useDeleteProduct } from "../../delete-product/useDeleteProduct";
import ProductsLayout from "../../../widgets/products-layout/ui/ProductsLayout";

function ProductsList() {
  const loading = useSelector((state) => state.products.fetchLoading);
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.users.user);
  const isAdmin = user?.role === "admin";
  const { handleDelete } = useDeleteProduct();
  return (
    <div className="productsContainer">
      <ProductsLayout>
        {loading ? (
          <Box
            sx={{
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <CircularProgress
              size={64}
              thickness={4}
              sx={{
                color: "#8b1515",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              Loading products...
            </Typography>
          </Box>
        ) : (
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
                  onDelete={handleDelete}
                  isAdmin={isAdmin}
                />
              ))}
            </Grid>
          </Grid>
        )}
      </ProductsLayout>
    </div>
  );
}

export default ProductsList;
