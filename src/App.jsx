import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; // Adjust imports based on your actual file structure
import Budget from './pages/Budgets';
import Expenses from './pages/Expenses';
import Upgrade from './pages/Upgrade';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className=' flex flex-col flex-grow'>
          <Navbar />
        <div className=" flex-grow p-4 overflow-auto"> {/* Content area */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/upgrade" element={<Upgrade />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
