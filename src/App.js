import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddProduct/>}/>
  <Route path='/viewall' element={<Viewall/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
