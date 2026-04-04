import { IconButton } from "@mui/material";

const AddToCartButton = ({ id, handleAddToCart }) => {
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart(id);
      }}
      sx={{
        padding: "8px",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255,255,255,0.6)",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "rgba(235, 235, 235, 0.8)",
          transform: "scale(1.15)",
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
};

export default AddToCartButton;
