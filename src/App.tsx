import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure correct path and component name
import {lazy,Suspense} from 'react';
import Loader from "./components/Loader"
const Dashboard = lazy(()=> import("./pages/Dashboard"));
const Customers = lazy(()=> import("./pages/Customers"));
const Product = lazy(()=> import("./pages/Product"));
const Transaction = lazy(()=> import("./pages/Transaction"));
const Customers = lazy(()=> import("./pages/management/NewProduct"));

const App = () => { // Use '=' instead of '=' in function declaration
  return (
    <Router>
      <Suspense fallback={<Loader/>}/>
      <Routes>
        
        <Route path="/admin/Dashboard" element={<Dashboard />} /> {/* Ensure correct component name */}
        <Route path="/admin/Customers" element={<Customers />} />
        <Route path="/admin/Product" element={<Product />} />
        <Route path="/admin/Transaction" element={<Transaction />} />

      

          {/* Charts */}


        
        {/* Managment */}
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ProductManagement />} />
      
      </Routes>
      <Suspense/>
    </Router>
  );
};

export default App;
