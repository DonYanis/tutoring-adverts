import {BrowserRouter as Router,Navigate ,Routes,Route} from "react-router-dom"

import Home from "./scenes/Home";


function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </section>
  );
}

export default App;
