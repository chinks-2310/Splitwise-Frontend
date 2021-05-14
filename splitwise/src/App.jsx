import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container></Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
