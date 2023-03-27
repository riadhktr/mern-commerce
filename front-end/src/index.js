/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {render} from "react-dom";
import { BrowserRouter, Route,Routes} from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";


import Register from './components/Register';

import Profile from './components/Profile';
import UserRoute from './privateRoute/UserRoute'
import Update from './components/Update';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "components/Login";

import { Provider } from 'react-redux'
import store from "store/store";
import AdminRoute from "privateRoute/AdminRoute";
import Admin from "Pages/AdminDashboard/Admin";
import User from "Pages/UserDashboard/User";
// others

const root = document.getElementById("root");

render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/index" element ={<Index/>}  />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
  

{/* 
      <Route
          path="about"
          element={
            shouldRedirect ? (
              <Navigate replace to="/home" />
            ) : (
              <About />
            )
          }
        /> */}
    </Routes>


         
    <Routes>
      <Route path='/login/register' element ={<Register/>} />
      <Route path='/login' element ={<Login/>} />
      
      <Route element={<UserRoute/>}>
        <Route path="/user" element={<User/>}/>
      <Route path='/account' element ={<Profile/>} />
      <Route path='/update/:id' element={<Update/>} />
      <Route path='/list' element={<List/>}/>
      </Route>
      <Route element={<AdminRoute/>}> 
      <Route path="/admin" element={<Admin/>}/>
      </Route>
   
    </Routes>
  </BrowserRouter>
  
  
  </Provider>,
   root
 
);
