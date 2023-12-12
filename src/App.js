import { Navbar } from "./Components/Navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop.js";
import { ShopCategory } from "./Pages/ShopCategory.js";
import { Product } from "./Pages/Product.js";
import {Cart} from "./Pages/Cart.js";
import { LoginSignUp } from "./Pages/LoginSignUp.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/LoginSignUp" element={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
