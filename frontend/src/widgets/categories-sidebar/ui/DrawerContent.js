import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { deleteCategoryRequest } from "../../../entities/category/model/categoriesActions";
import DeleteIcon from "../../../shared/ui/DeleteIcon/DeleteIcon";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const DrawerContent = ({ categories }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const isAdmin = user?.role === "admin";

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategoryRequest(categoryId));
    toast.success("Category deleted successfully");
  };

  return (
    <>
      <DrawerHeader>
        <Typography variant="h5">Categories</Typography>
      </DrawerHeader>
      <Divider sx={{ backgroundColor: "#fff" }} />
      <List>
        {categories.map((category) => (
          <div key={category._id}>
            <ListItem disablePadding sx={{ position: "relative" }}>
              <ListItemButton
                component={Link}
                to={`/?category=${category._id}`}
                sx={{
                  justifyContent: "center",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(131, 122, 122, 0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={category.title}
                  primaryTypographyProps={{
                    variant: "h6",
                  }}
                  sx={{
                    textAlign: "center",
                  }}
                />
              </ListItemButton>

              {isAdmin && (
                <IconButton
                  onClick={(e) => handleDeleteCategory(category._id, e)}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    padding: "4px",
                    "&:hover": {
                      backgroundColor: "rgba(244, 67, 54, 0.1)",
                      "& svg": {
                        stroke: "#f44336",
                      },
                    },
                  }}
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </ListItem>
            <Divider sx={{ backgroundColor: "#f4efef" }} />
          </div>
        ))}
      </List>
    </>
  );
};
export default DrawerContent;
