import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Typography from '@mui/material/Typography'


function ProductItem({id, title,price}) {
  return (
   <Grid item xs={12} display="flex" justifyContent="center">
  <Card
    sx={{
      maxWidth: 420,
      width: "100%",
      borderRadius: 4,
      boxShadow: 6,
      p: 1,
    }}
  >
    <CardHeader
      title={title}
      titleTypographyProps={{
        fontWeight: 700,
        textAlign: "center",
      }}
    />

    <CardContent sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: 600, mb: 2 }}
      >
        ${price}
      </Typography>

      <Typography variant="body1" color="text.secondary">
        Premium jewelry product
      </Typography>
    </CardContent>

    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
      <IconButton
        component={Link}
        to={`/products/${id}`}
        color="primary"
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: 2,
          px: 3,
          "&:hover": {
            backgroundColor: "primary.main",
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

  )
}

export default ProductItem