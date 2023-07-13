import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Components
import Footer from './Components/Footer';
import Home from './pages/Home';
import AddDonor from './Components/AddDonor';
import AddSeeker from './Components/AddSeeker';
import Welcome from './pages/Welcome';
import ViewDonor from './Admin/ViewDonor';
import ViewSeeker from './Admin/ViewSeeker';
import NotFound from './pages/NotFound';
import BloodDetails from './Admin/BloodDetails';
import AddBloodDetails from './Admin/AddBloodDetails';
import Aboutus from './pages/Aboutus';
import Whydonate from './pages/Whydonate';
import Request from './Components/Request';
import Login from './pages/Login';
import Register from './pages/Register';
import MainNavigation from './Components/MainNavigation';

const App = () => {
  const role =  localStorage.getItem("Role")
  let isLoggedIn = false;
  if(role !== null && role !== undefined){
    isLoggedIn = true;
  }

  function logincheck(Component) {

    console.log("Checking if user is logged in");
    if (isLoggedIn === false) {
      return <div>Not Logged in</div>;
    } else {
      return <>{Component}</>;
    }
  }
  return (
    <>
          <MainNavigation>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Welcome" element={<Welcome />} />
              <Route path="/AddDonor" element={logincheck(<AddDonor />)} />
              <Route path="/edit-donor/:id" element={<AddDonor/>}></Route>
              <Route path="/ViewDonor" element={<ViewDonor />} />
              <Route path="/AddSeeker" element={<AddSeeker />} />
              <Route path="/ViewSeeker" element={<ViewSeeker />} />
              <Route path="/edit-seeker/:id" element={<AddSeeker/>}></Route>
              <Route path="/BloodDetails" element={<BloodDetails/>}/>
              <Route path="/AddBloodDetails" element={<AddBloodDetails/>}/>
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/whydonate" element={<Whydonate />}/>
              <Route path="/Request/:id" element={<Request />} />
              <Route path="/login" element={<Login/>} />
              <Route path="*" element={<NotFound />} />
              <Route path='/register' element={<Register/>}/>
            </Routes>
            </MainNavigation>
            <Footer/>
    </>
  );
}

export default App;
