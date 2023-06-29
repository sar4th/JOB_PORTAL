import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import EmpRegister from "./pages/EmpRegister";
import EmpLogin from "./pages/EmpLogin";
import NewJob from "./pages/NewJob";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/emp/register" element={<EmpRegister />} />
        <Route path="/emp/login" element={<EmpLogin />} />
        <Route path="/emp/new-job" element={<NewJob />} />
      </Routes>
    </Router>
  );
}

export const Server = "http://localhost:4000";
export default App;
