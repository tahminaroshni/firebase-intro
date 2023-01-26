import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, data => {
      if (data) {
        setUser(data);
      }
      else {
        console.log('no user found!');
      }
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
