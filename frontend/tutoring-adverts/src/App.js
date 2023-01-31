import {BrowserRouter as Router,Navigate ,Routes,Route} from "react-router-dom"
import {useState, useEffect} from "react"

// THE SCENES

import Home from "./scenes/Home";
import LoginPage from "./scenes/LoginPage";
import RegisterPage from "./scenes/RegisterPage";
import UserDashboardPage from "./scenes/UserDashboardPage";
import AccountPage from "./scenes/AccountPage";
import OfferPage from "./scenes/OfferPage";
import ChatPage from "./scenes/ChatPage";
import AddOfferPage from "./scenes/AddOfferPage";
import AdminPage from "./scenes/AdminPage";
import UserAnnouncesPage from "./scenes/UserAnnouncesPage";
import UserFavoritesPage from "./scenes/UserFavoritesPage";

//-----------------------------------------------------------------------------------------


function App() {
  const [user , setUser] = useState(null);
  useEffect(() => {
    
    // Access initial value from session storage
    setUser(sessionStorage.getItem("user"))
    console.log(user);
    // Update session storage
  }, []);
  


  return (
    <section>
      <Router>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/:id" element={<RegisterPage />} />
          <Route path="/home/:id" element={<UserDashboardPage />}/>
          <Route path="/account/:id" element={<AccountPage/>}/>
          <Route path="/offers/:id" element={<OfferPage/>} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/add-offer/:id" element={<AddOfferPage />} />
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="/my-offers/:id" element={<UserAnnouncesPage/>}/>
          <Route path="/my-favorites/:id" element={<UserFavoritesPage />} />

        </Routes>
      </Router>
    </section>
  );
}

export default App;
