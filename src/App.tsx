import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Tour from "./pages/Tour/Tour";
import Product from "./pages/Product/Product";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
