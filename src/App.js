
import './App.css';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import PrivateComponents from './components/Privatecomponent';
import Login from './components/Login';
import Product from './components/Product';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/codepen/dashboard';
import Profile from './components/codepen/PROFILE/Profile';


function App() {
  return (
    <div >
      <header >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route element={<PrivateComponents />} >
              <Route path='/' element={<ProductList/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/add' element={<Product />} />
              <Route path='/update/:id' element={<UpdateProduct/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/logout' element={<h1> Logout Product component</h1>} />
            <Route path='/PageNotFound' element={<PageNotFound/>} />
            </Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>     
          {/* <Footer /> */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
