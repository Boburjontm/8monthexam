import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Like from "./pages/Like";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import AboutComp from "./pages/AboutComp";
import Delivery from "./pages/Delivery";
import Services from "./pages/Services";
import Article from "./pages/Article";
import Payment from "./pages/Payment";
import Guarantees from "./pages/Guarantees";
import Reviews from "./pages/Reviews";
import Price from "./pages/Price";
import Turnkey from "./pages/Turnkey";
import Contacts from "./pages/Contacts";
import Reanimation from "./pages/Reanimation";
import Certificates from "./pages/Certificates";
import Vacancies from "./pages/Vacancies";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
export const AboutContext = createContext();
export const ShopContext = createContext();
export const ProductContext = createContext();

const App = () => {
  const [about, setAbout] = useState([]);
  const [shop, setShop] = useState([]);
  const [product, setProduct] = useState([]);

  return (
    <ShopContext.Provider value={{ shop, setShop }}>
      <AboutContext.Provider value={{ about, setAbout }}>
        <ProductContext.Provider value={{ product, setProduct }}>
          <div className="w-[100%] border container mx-auto">
            <BrowserRouter>
              <div className="w-full container mx-auto mt-[210px]">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/productpage" element={<ProductPage />} />
                  <Route path="/aboutcomp" element={<AboutComp />} />
                  <Route path="/delivery" element={<Delivery />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/article" element={<Article />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/garantii" element={<Guarantees />} />
                  <Route path="/review" element={<Reviews />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/aksii" element={<Price />} />
                  <Route path="/turnkey" element={<Turnkey />} />
                  <Route path="/contact" element={<Contacts />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/vakansii" element={<Vacancies />} />
                  <Route path="/reanimatsiya" element={<Reanimation />} />
                  <Route path="/certificat" element={<Certificates />} />
                  <Route path="/basket" element={<Basket />} />
                  <Route path="/like" element={<Like />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </div>
        </ProductContext.Provider>
      </AboutContext.Provider>
    </ShopContext.Provider>
  );
};

export default App;
