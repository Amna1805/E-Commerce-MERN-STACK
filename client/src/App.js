import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/main/home";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Product from "./components/main/product";
import CategoriesComponent from "./components/actual/CategoriesList";
import CategoryProducts from "./components/main/CategoryProducts";
import Checkout from "./components/main/checkout";
import Cart from "./components/main/cart";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view-product" element={<Product />} />
          <Route path="/category/:categoryID" element={<CategoryProducts />} />
          <Route path="/detailedcart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
