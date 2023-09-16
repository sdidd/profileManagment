import React from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/admin/*" element={<AdminPanel />} /> {/* Use /admin/* to match all routes under /admin */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
