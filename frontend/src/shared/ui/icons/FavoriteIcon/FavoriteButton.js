import IconButton from "@mui/material/IconButton";
import HeartIcon from "./HeartIcon";

function FavoriteButton({ isFavorite = false, onToggle }) {
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
    >
      <HeartIcon isFavorite={isFavorite} />
    </IconButton>
  );
}

export default FavoriteButton;
