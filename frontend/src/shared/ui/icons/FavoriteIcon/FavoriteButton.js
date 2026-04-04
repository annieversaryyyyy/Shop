import IconButton from "@mui/material/IconButton";
import HeartIcon from "./HeartIcon";

function FavoriteButton({ isFavorite = false, onToggle }) {
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
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
      <HeartIcon isFavorite={isFavorite} />
    </IconButton>
  );
}

export default FavoriteButton;
