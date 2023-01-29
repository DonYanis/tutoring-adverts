import {BrowserRouter as Router,Navigate ,Routes,Route} from "react-router-dom"

// THE SCENES

import Home from "./scenes/Home";
import LoginPage from "./scenes/LoginPage";
import RegisterPage from "./scenes/RegisterPage";
import UserDashboardPage from "./scenes/UserDashboardPage";
import AccountPage from "./scenes/AccountPage";
import OfferPage from "./scenes/OfferPage";

//-----------------------------------------------------------------------------------------


function App() {
  return (
    <section>
      <Router>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<UserDashboardPage />}/>
          <Route path="/account" element={<AccountPage/>}/>
          <Route path="/offers/:id" element={<OfferPage/>} />

        </Routes>
      </Router>
    </section>
  );
}

export default App;
