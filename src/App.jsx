import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/Sign_In';
import SignUp from './components/Sign_Up';
import Budgets from './pages/Budgets';

import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path='/sign_in' element={<SignIn />} />
      <Route path='/sign_up' element={<SignUp />} /> */}
     
      <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="budgets" element={<Budgets />} />
  </Route>
      
      
       
    

    </Routes>
  );
}

export default App;
