import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/places/new' element={<NewPlaces />} />
      <Route path='' element={<Navigate to="/users" />} />
    </Routes>

  </Router>
}

export default App;
