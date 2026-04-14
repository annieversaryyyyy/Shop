import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ProductItem from "../../../entities/product/ui/ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PREVIEW_COUNT = 3;

function Collection() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.fetchLoading);
  const fetchError = useSelector((state) => state.products.fetchError);
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const items = (Array.isArray(products) ? products : []).slice(
    0,
    PREVIEW_COUNT,
  );

  useEffect(() => {
    if (!items.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("#collection-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(itemsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <Box
      component="section"
      ref={sectionRef}
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
          {items.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product._id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            >
              <ProductItem
                id={product._id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Collection;
