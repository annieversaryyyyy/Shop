import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import imageNotAvailable from "../../../../shared/assets/notAvailable.jpg";
import { apiUrl } from "../../../../shared/config/config";
import DeleteIcon from "../../../../shared/ui/icons/DeleteIcon/DeleteIcon";
import FavoriteButton from "../../../../shared/ui/icons/FavoriteIcon/FavoriteButton";
import { toggleFavoriteRequest } from "../../../user/model/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest } from "../../../cart/model/cartActions";
import AddToCartButton from "../../../../shared/ui/icons/AddToCartButton/AddToCartButton";

function ProductItem({ id, title, price, image, onDelete, isAdmin }) {
  let cardImage = imageNotAvailable;

  if (image) {
    cardImage = apiUrl + "/" + image;
  }
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.users.favorites);
  const isFavorite = favorites.some((favId) => favId.toString() === id);

  const handleToggle = (productId) => {
    dispatch(toggleFavoriteRequest(productId));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCartRequest({
        productId: id,
        quantity: 1,
      }),
    );
  };

  return (
    <Grid item xs={12} lg={3} display="flex" justifyContent="center">
      <Card
        sx={{
          position: "relative",
          maxWidth: 420,
          width: "100%",
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: "#000000",
          transition: "0.3s ease",
          cursor: "pointer",

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: 12,
          },

          "&:hover .delete-btn": {
            opacity: 1,
          },
        }}
      >
        <CardMedia component="img" height="220" image={cardImage} alt={title} />
        <CardHeader
          sx={{ color: "white" }}
          title={title}
          titleTypographyProps={{
            fontWeight: 700,
            textAlign: "center",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            zIndex: 10,
          }}
        >
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => handleToggle(id)}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <AddToCartButton id={id} handleAddToCart={handleAddToCart} />
        </Box>

        <Box
          sx={{
            "&:hover .MuiIconButton-root": {
              opacity: 1,
            },
          }}
        >
          {isAdmin && (
            <IconButton
              className="delete-btn"
              onClick={(e) => onDelete(id)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                transform: "none",
                padding: "4px",
                opacity: 0,
              }}
              size="small"
            >
              <DeleteIcon color="#ffffff" />
            </IconButton>
          )}
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            color="white"
            sx={{ fontWeight: 600, mb: 2 }}
          >
            ${price}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: 2 }}>
          <IconButton
            component={Link}
            to={`/products/${id}`}
            sx={{
              color: "white",
              border: "1px solid",
              borderColor: "white",
              borderRadius: 2,
              px: 3,
              "&:hover": {
                backgroundColor: "#1e1d1d",
                color: "#ffffff",
              },
            }}
          >
            <ArrowForwardIcon sx={{ mr: 1 }} />
            View product
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};

export default ProductItem;
