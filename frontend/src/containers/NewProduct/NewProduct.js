import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/actions/productsActions";
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onProductFormSubmit = async (productData) => {
    await dispatch(createProduct(productData));
    navigate("/");
  };
  return (
    <>
      <ProductForm onSubmit={onProductFormSubmit} />
    </>
  );
}

export default NewProduct;
