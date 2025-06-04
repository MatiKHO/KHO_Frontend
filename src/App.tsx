import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import ShopPage from "@/pages/shop";
import CartPage from "@/pages/cart";
import WishlistPage from "@/pages/wishlist";
import AboutPage from "@/pages/about";
import ProfilePage from "@/pages/profile";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<ShopPage />} path="/tienda" />
      <Route element={<CartPage />} path="/cart" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<WishlistPage />} path="/wishlist" />
      <Route element={<AboutPage />} path="/sobre-nosotros" />
    </Routes>
  );
}

export default App;
