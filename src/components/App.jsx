import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginComponent from "./login/login";
import Dashboard from "./dashboard/dashb";
export default function App() {
    //  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      
      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={<LoginComponent />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
              </Routes>
              </div>
          </Router>
      
  );
}
