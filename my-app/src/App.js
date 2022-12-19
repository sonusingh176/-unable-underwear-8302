
import './App.css';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/login';
import Product from './Pages/Product/Product'
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Register from './Pages/Register/register';

import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product-detail" element={<ProductDetails/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          
        </Routes>
      </BrowserRouter>
 
      {/* <Home/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      

    </div>
  );
}

export default App;
