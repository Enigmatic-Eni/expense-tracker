import SignUp from './components/Sign_In'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Sidebar from './components/sidebar';
import Test from './pages/test';

function App() {

  return (
    <div className="app">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router> */}
      {/* <SignUp /> */}
      <Test/>
    </div>
  )
}

export default App
