import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import imageNotAvailable from "../../assets/notAvailable.jpg";
import { apiUrl } from "../../config";
import CardMedia from "@mui/material/CardMedia";

function ProductItem({ id, title, price, image }) {
  let cardImage = imageNotAvailable;

  if (image) {
    cardImage = apiUrl + "/uploads/" + image;
  }

  return (
    <Grid item xs={12} lg={3} display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: 420,
          width: "100%",
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: "#05111c",
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
        <CardMedia title={title} height="220" image={cardImage} />

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
                backgroundColor: "#142331",
                color: "#fff",
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
