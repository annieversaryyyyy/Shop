import { Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import Products from "./containers/Products/Products";
import Product from "./containers/Product/Product";
import NewProduct from "./containers/NewProduct/NewProduct";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
