import { Route, Routes } from "react-router-dom";
import Product from "../pages/product/ProductPage";
import Register from "../pages/register/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../pages/login/LoginPage";
import ProductsPage from "../pages/home/ProductsPage";
import NewProduct from "../pages/new-product/NewProductPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
