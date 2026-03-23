import { useEffect } from "react";
import ProductForm from "../../features/create-product/ui/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProductRequest } from "../../entities/product/model/productsActions";
import { fetchCategoriesRequest } from "../../entities/category/model/categoriesActions";

function NewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.categories);
  const error = useSelector((state) => state.products.createProductsError);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  const onProductFormSubmit = async (productData) => {
    const result = await dispatch(createProductRequest(productData));

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
