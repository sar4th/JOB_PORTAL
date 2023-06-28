import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/login" element={<UserLogin/>}/>
      </Routes>
    </Router>
  );
}

export const Server="http://localhost:4000"
export default App;
