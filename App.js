import React from "react";

import { About, Header, Skills, Work, Testimonial, Footer } from "./container";
import { Navbar } from "./components";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
