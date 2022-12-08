import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserDetails from './components/Userdetails/Userdetails'
import Sidenav from './components/Sidenav/Sidenav';
import Orders from './pages/Orders';
import MyDetails from './components/MyDetails/MyDetails';
import Home from './pages/homepage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <div><Home/><Footer/></div>}  />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/orders' element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default App;
