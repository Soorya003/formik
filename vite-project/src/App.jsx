import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Books from './Books';
import Authors from './Authors';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/books" className="nav-link" activeClassName="active">Books</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/authors" className="nav-link" activeClassName="active">Authors</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>          
          <Route path="/books" element={<Books/>} />
          <Route path="/authors" element={<Authors/>} />
          </Routes>

      </div>
    </Router>
  );
};

export default App;


