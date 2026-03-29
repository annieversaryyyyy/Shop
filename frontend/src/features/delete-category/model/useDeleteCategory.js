import { useDispatch } from "react-redux";
import { deleteCategoryRequest } from "../../../entities/category/model/categoriesActions";

export const useDeleteCategory = () => {
  const dispatch = useDispatch();

  const deleteCategory = (categoryId) => {
    dispatch(deleteCategoryRequest(categoryId));
  };
  return { deleteCategory };
};
