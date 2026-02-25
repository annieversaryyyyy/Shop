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
  const error = useSelector((state) => state.products.createProductsError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onProductFormSubmit = async (productData) => {
    const result = await dispatch(createProduct(productData));

    if (result) {
      navigate("/");
    }
  };

  return (
    <>
      <ProductForm
        categories={categories}
        error={error}
        onSubmit={onProductFormSubmit}
      />
    </>
  );
}

export default NewProduct;
