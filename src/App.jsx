import React, {useEffect} from "react"
import { useLocation } from "react-router-dom"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header-Footer/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Footer from "./components/Header-Footer/Footer"
import Products from "./components/Products/Products"
import Pricing from "./components/Pricing/Pricing"
import TermsOfService from "./components/Terms-of-Service/TermsOfService"
import ProductPage from "./components/Products/ProductPage"

function App() {
  
  return (
    <>
    <div>
     <Router>
      <ScrollToTop/>
      <Header/>
       <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/products'} element={<Products/>}/>
        <Route path={'/pricing'} element={<Pricing/>}/>
        <Route path={'/terms-of-service'} element={<TermsOfService/>}/>
        <Route path={'/login'} element={<Home/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
       </Routes>
       <Footer/>
     </Router>
    </div>
    </>
  )
}
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
export default App
