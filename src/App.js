import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./containers/Header/Header";
import ProductDetails from "./containers/ProductDetail/ProductDetails";
import ProductListing from "./containers/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
