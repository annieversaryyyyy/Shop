import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductRequest,
  fetchProductRequest,
} from "../../entities/product/model/productsActions";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";

  useEffect(() => {
    dispatch(fetchProductRequest(id));
  }, [dispatch, id]);

  const handleDelete = (id) => {
    if (user?.role !== "admin") {
      alert("You do not have permission to delete this product.");
      return;
    }
    toast.success("Product deleted successfully");

    navigate("/");
    dispatch(deleteProductRequest(id));
  };

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
              <Button component={Link} to="/" variant="outlined" size="large">
                Back
              </Button>
              {isAdmin && (
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    )
  );
}

export default Product;
