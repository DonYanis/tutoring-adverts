import {BrowserRouter as Router,Navigate ,Routes,Route} from "react-router-dom"

// THE SCENES

import Home from "./scenes/Home";
import LoginPage from "./scenes/LoginPage";
import RegisterPage from "./scenes/RegisterPage";
import UserDashboardPage from "./scenes/UserDashboardPage";

//-----------------------------------------------------------------------------------------


function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserDashboardPage />}/>
        </Routes>
      </Router>
    </section>
  );
}

export default App;
