import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <Router>
      <PageWrapper>

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>


      </PageWrapper>
    </Router>
  );
}

export default App;
