import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  deleteProductRequest,
  resetDeleteProductState,
} from "../../../entities/product/model/productsActions";

export const useDeleteProduct = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const deleteProductSuccess = useSelector(
    (state) => state.products.deleteSuccess,
  );
  const deleteProductError = useSelector((state) => state.products.deleteError);

  const handleDelete = (id) => {
    if (user?.role !== "admin") {
      toast.error("No permission");
      return;
    }
    dispatch(deleteProductRequest(id));
  };

  useEffect(() => {
    if (deleteProductSuccess) {
      toast.success("Product deleted");
      dispatch(resetDeleteProductState());
    }
  }, [deleteProductSuccess, dispatch]);

  useEffect(() => {
    if (deleteProductError) {
      if (
        deleteProductError.includes &&
        deleteProductError.includes("Wrong token")
      ) {
        toast.error("Session expired. Please login again");
      } else {
        toast.error(`Delete failed: ${deleteProductError}`);
      }
      dispatch(resetDeleteProductState());
    }
  }, [deleteProductError, dispatch]);

  return { handleDelete };
};
