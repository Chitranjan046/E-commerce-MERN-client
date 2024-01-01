import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);

const App = () => {
  // Use '=' instead of '=' in function declaration
  return (
    <Router>
      <Suspense fallback={<Loader />} />
      <Routes>
        <Route path="/admin/Dashboard" element={<Dashboard />} />{" "}
        {/* Ensure correct component name */}
        <Route path="/admin/Customers" element={<Customers />} />
        <Route path="/admin/Product" element={<Product />} />
        <Route path="/admin/Transaction" element={<Transaction />} />
        
        {/* Charts */}

        <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />
        
        
        
       
        {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ProductManagement />} />
        <Route
          path="/admin/transaction/:id"
          element={<TransactionManagement />}
        />
      </Routes>
      <Suspense />
    </Router>
  );
};

export default App;
