import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure correct path and component name
import {lazy} from 'react';
const Dashboard = lazy(()=> import("./pages/dashboard"));
const Customers = lazy(()=> import("./pages/Customers"));
const Product = lazy(()=> import("./pages/Product"));
const Transaction = lazy(()=> import("./pages/Transaction"));

const App = () => { // Use '=' instead of '=' in function declaration
  return (
    <Router>
      <Routes>
        <Route path="/admin/Dashboard" element={<Dashboard />} /> {/* Ensure correct component name */}
        <Route path="/admin/Customers" element={<Customers />} />
        <Route path="/admin/Product" element={<Product />} />
        <Route path="/admin/Transaction" element={<Transaction />} />
      
      </Routes>
    </Router>
  );
};

export default App;
