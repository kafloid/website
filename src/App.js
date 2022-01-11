import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>

        <Routes>
          <Route exact={true} path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

      </PageWrapper>
    </Router>

  );

}


export default App;
