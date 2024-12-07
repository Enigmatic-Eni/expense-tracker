import SignUp from './components/Sign_In'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
<<<<<<< HEAD
=======
import Sidebar from './components/sidebar';
import Test from './pages/test';
>>>>>>> 1c607b7f29081ff752b24ec65fc7da2d686ef134

function App() {

  return (
    <div className="app">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router> */}
<<<<<<< HEAD
      <SignUp />
=======
      {/* <SignUp /> */}
      <Test/>
>>>>>>> 1c607b7f29081ff752b24ec65fc7da2d686ef134
    </div>
  )
}

export default App
