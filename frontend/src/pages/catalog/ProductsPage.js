import ProductsList from "../../features/get-products-list/ui/ProductsList";
import { fetchCategoriesRequest } from "../../entities/category/model/categoriesActions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProductsRequest } from "../../entities/product/model/productsActions";
import { useEffect } from "react";

function ProductsPage() {
  const dispatch = useDispatch();
  const query = useLocation().search;

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    dispatch(fetchProductsRequest(query));
  }, [dispatch, query]);

  return <ProductsList />;
}

export default ProductsPage;
