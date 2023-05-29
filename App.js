
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App"> 
    <Navigation />
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/l" element={< Login/>} />
      <Route path="/hp" element={<HomePage/>} />
     <Route path='/s' element={<Signup/>} />
    </Routes>
    </div>
  );
}

export default App;
