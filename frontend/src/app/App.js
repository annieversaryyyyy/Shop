import { Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../pages/product/ProductPage";
import Register from "../pages/register/RegisterPage";
import Login from "../pages/login/LoginPage";
import ProductsPage from "../pages/home/ProductsPage";
import NewProduct from "../pages/new-product/NewProductPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { googleClientId } from "../shared/config/config";
import Favorites from "../pages/favorites/Favorites";
import { fetchFavoritesRequest } from "../entities/user/model/usersActions";
import { fetchProductsRequest } from "../entities/product/model/productsActions";
import UserAccount from "../pages/user-account/UserAccount";
import MainPage from "../pages/main/MainPage";

function App() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest(""));
    if (user) {
      dispatch(fetchFavoritesRequest());
    }
  }, [user, dispatch]);
  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/home" element={<MainPage />} />
          
            <Route
              path="/products/new"
              element={
                <ProtectedRoute
                  isAllowed={user?.role === "admin"}
                  redirectTo="/"
                >
                  <NewProduct />
                </ProtectedRoute>
              }
            />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute isAllowed={!!user} redirectTo="/login">
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route path="/account" element={<UserAccount />} />
          </Routes>
        </MainLayout>
        <ToastContainer position="top-right" autoClose={3000} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
