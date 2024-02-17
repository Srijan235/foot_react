import React from 'react';
import ReactDOM from 'react-dom/client';


import Navbar from './components/navbar';
import HomePage from './components/homePage';
import MediaCard from './components/card';
import SignIn from './components/SignIn';
import App from './App';
import SignUp from './components/SignUp';

import {BrowserRouter,Routes,Route,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
      <Routes>
          <Route
              exact
              path="/"
              element={<App />}
          />
          <Route
              exact
              path="/login"
              element={<SignIn />}
          />
          <Route exact path="/register" element={<SignUp/>}/>

      </Routes>
  </BrowserRouter>
</>
);


