
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screen/Home';
import Login from './Screen/Login';
import Signup from './Screen/Signup';


function App() {
  return (
   <>
   <BrowserRouter>
       <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/createuser' Component={Signup}/>
       </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
