import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProductItem from "../../../entities/product/ui/ProductItem/ProductItem";
import { useSelector } from "react-redux";

const PREVIEW_COUNT = 3;

function Collection() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.fetchLoading);
  const fetchError = useSelector((state) => state.products.fetchError);
  

  const items = (Array.isArray(products) ? products : []).slice(
    0,
    PREVIEW_COUNT,
  );

  return (
    <Box
      component="section"
      aria-labelledby="collection-heading"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          id="collection-heading"
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "'Boldonse', sans-serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#640000",
            fontWeight: 600,
          }}
        >
          Collection
        </Typography>
        <Button
          component={RouterLink}
          to="/products"
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "rgba(255,255,255,0.5)",
            letterSpacing: "0.08em",
            "&:hover": {
              borderColor: "#fff",
              backgroundColor: "rgba(255,255,255,0.06)",
            },
          }}
        >
          View all
        </Button>
      </Box>

      {loading && (
        <Box
          sx={{
            minHeight: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: "#8b1515" }} />
        </Box>
      )}

      {fetchError && !loading && (
        <Typography color="error" role="alert">
          {fetchError}
        </Typography>
      )}

      {!loading && !fetchError && items.length === 0 && (
        <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
          No products yet.
        </Typography>
      )}

      {!loading && !fetchError && items.length > 0 && (
        <Grid container spacing={3} justifyContent="center">
          {items.map((product) => (
            <ProductItem
              key={product._id}
              id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Collection;
