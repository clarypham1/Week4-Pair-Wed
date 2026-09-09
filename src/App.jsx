import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* existing JSX here - don't change the content yet */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </BrowserRouter>
  );
}

export default App;