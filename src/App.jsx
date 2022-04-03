
import React, { Fragment } from 'react';
import Home from './page/Home';
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css';

function App() {

  return (
 <Routes>
  <Route exact path="/" element={<Home />}>
  </Route>
</Routes>

  )
}

export default App;
