import './App.css'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { MainLayout } from './layouts/MainLayout';
import { MainPage } from './Pages/MainPage';
import { Cart } from './Pages/Cart';
function App() {

  
  return (
    // <>dffwfewfe</>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Route>  
    </Routes>  
    
  )}

export default App
