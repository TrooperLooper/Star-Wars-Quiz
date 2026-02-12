import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import API from "./pages/api.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/game" element={<API />} />
    </Routes>
  </Router>
);

export default App;
