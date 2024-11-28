import SignUp from './components/Sign_In'
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {

  return (
    <div className="app">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <SignUp />
    </div>
  )
}

export default App
