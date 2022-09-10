import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/AboutFIle/About';
import Appointment from './Components/AppointMentFile/Appointment';
import Home from './Components/HomeFile/Home';
import Login from './Components/LoginFile/Login';
import Register from './Components/RegisterFile/Register';
// import Register from './Components/RegisterFile/Register';
import Reviews from './Components/ReviewsFile/Reviews';
import Footer from './Components/SharedFile/Footer';
import NavBar from './Components/SharedFile/NavBar';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <>
        <NavBar></NavBar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='About' element={<About></About>}></Route>
          <Route path='Appointment' element={<Appointment></Appointment>}></Route>
          <Route path='Reviews' element={<Reviews></Reviews>}></Route>
          <Route path='Login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
        </Routes>
      </>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
