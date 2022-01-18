import React from 'react';
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login';
import Profile from'./pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/details' element={<Movies/>} />
        <Route path='/profile' element={<Profile/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
