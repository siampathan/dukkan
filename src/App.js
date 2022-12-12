import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Person from "./components/person/person";
import Stock from "./components/stock/stock";
import Footer from "./components/footer/footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/person" element={<Person />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
