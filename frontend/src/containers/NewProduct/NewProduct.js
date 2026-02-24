import React, { useEffect } from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/actions/productsActions";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../store/actions/categoriesActions";

function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onProductFormSubmit = async (productData) => {
    await dispatch(createProduct(productData));
    navigate("/");
  };
  return (
    <>
      <ProductForm 
      categories={categories}
      onSubmit={onProductFormSubmit} />
    </>
  );
}

export default NewProduct;
