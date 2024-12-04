import {} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Login2 from './auth/Login2';
import Register from './auth/Register';
import Produit from './auth/produit';
import Hotel from './auth/Hotel';
import Hotelfaviourit from './auth/Hotelfaviourit';
import Contact from './auth/contact';
import About from './auth/About';
import Reservation from './auth/Reservation';
import Flight from './auth/Flight';
import HotelResult from './auth/HotelResult';
import Tourisme from './auth/Tourisme';
import Tourismecontinu from './auth/tourismecontinu';
import Fin from './auth/fin';
import Finalreservation from './auth/Finalreservation';
import Home from './auth/Home';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/produit" element={<Produit />} />
      <Route path="/Hotel" element={<Hotel />} />
      <Route path="/Hotelfaviourit" element={<Hotelfaviourit />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Flight" element={<Flight />} />
      <Route path="/HotelResult" element={<HotelResult />} />
      <Route path="/Tourisme" element={<Tourisme />} />
      <Route path="/Tourismecontinu" element={<Tourismecontinu />} />
      <Route path="/Fin" element={<Fin />} />
      <Route path="/Finalreservation" element={<Finalreservation />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

 export default App
