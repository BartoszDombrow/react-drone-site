import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../Hero/Hero";
import TopbarInfo from "../../components/Topbar/Topbar";
import Offer from "../Offer/Offer";
import OfferDescription from "../OfferDescription/OfferDescription";
import Footer from "../../components/Footer/Footer";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="App">
      <TopbarInfo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/oferta" element={<Offer />} />
        <Route path="/oferta/:id" element={<OfferDescription />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
