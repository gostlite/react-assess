import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import LoginComponent from "./login/login";
import Dashboard from "./dashboard/dashb";
export default function App() {
  return (
      
      <Router>
          <div>
              <Routes>
        <Route exact path="/" element={<LoginComponent />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/contact" component={Contact} /> */}
              </Routes>
              </div>
          </Router>
      
  );
}
