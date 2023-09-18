import "./App.css";

import DashBoard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Product/Product";
// import NewProduct from "./Components/Add a New Product/NewProduct";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddnewProduct from "./Components/New folder/AddnewProduct";
function App() {
  return (
    <div className='App'>
      {/* DashBoard ****** page */}
      {/* <DashBoard /> */}
      {/* Products ****** page */}
      {/* <Product /> */}
      {/* Add a new Product****page */}
      {/* <NewProduct /> */}

      {/* <AddnewProduct /> */}

      <Router>
        <Routes>
          <Route path='/Dashboard' element={<DashBoard />} />
          <Route path='/' element={<DashBoard />} />
          <Route path='Product' element={<Product />} />
          <Route path='addNewProduct' element={<AddnewProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
