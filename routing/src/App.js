import React from "react";
import { Route, Routes } from "react-router-dom";
import Free from "./components/price/Free";
import Navigation from "./pages/Navigation";
import Paid from "./components/price/Paid";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Price from "./pages/Price";
import Tier1 from "./components/price/Tier1";
import Tier2 from "./components/price/Tier2";
import {Button} from 'antd'
import Prime from "./pages/Prime";
import ProtectedForPrime from "./components/ProtectedForPrime";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path='/home'
          element={<h1 className="text-6xl text-teal-500">Hola</h1>}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        <Route element={<ProtectedForPrime />}>        {/* Concept of Protected Routes */}
          <Route path="/prime" element={<Prime />}/>
        </Route>


        <Route
          path="/price"
          element={<Price />}
        >
          <Route path="free" element={<Free />}/>    {/*// Concept of Nested Routes  -- Don't forget Outlet */}
          <Route path='paid' element={<Paid />}>
            <Route path="tier1" element={<Tier1 />}/>  {/*//// Concept of Nested Routes -- Don't forget Outlet */}
            <Route path="tier2" element={<Tier2 />}/>
          </Route>
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/user/:userId"
          element={<Profile />}
        />
        <Route 
          path="/user/:userId/:projectId"
          element = {<Project />}
        />
      </Routes>

    </div>
  );
}

export default App;
