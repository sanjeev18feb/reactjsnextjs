
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login';
import Home from './component/home';
import Settings from './component/setting';
import Contact from './component/contact';
import Calendar from './component/calendar';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App;
