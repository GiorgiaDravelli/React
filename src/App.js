import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TimerPage } from "./pages/TimerPage";
import {Header} from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timerpage" element={<TimerPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
