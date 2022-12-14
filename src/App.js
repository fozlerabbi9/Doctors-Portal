import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/AboutFIle/About';
import Appointment from './Components/AppointMentFile/Appointment';
import Home from './Components/HomeFile/Home';
import Login from './Components/LoginFile/Login';
import Register from './Components/RegisterFile/Register';
import RequireAuth from './Components/RequireAuthFile/RequireAuth';
// import Register from './Components/RegisterFile/Register';
import Reviews from './Components/ReviewsFile/Reviews';
import Footer from './Components/SharedFile/Footer';
import NavBar from './Components/SharedFile/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/DashboardFile/Dashboard';
import MyyAppoinment from './Components/DashboardFile/MyyAppoinment';
import MyReviews from './Components/DashboardFile/MyReviews';
import AllUsers from './Components/DashboardFile/AllUsers';



function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <>
        <NavBar></NavBar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='About' element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }></Route>
          <Route path='Appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }></Route>
          <Route path='Reviews' element={<Reviews></Reviews>}></Route>
          <Route path='Login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>

          <Route path='Dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyyAppoinment></MyyAppoinment>}></Route>
            <Route path="MyAppointment" element={<MyyAppoinment></MyyAppoinment>}></Route>
            <Route path='myReviews' element={<MyReviews></MyReviews>}></Route>
            <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
          </Route>

        </Routes>
      </>

      {/* <Footer></Footer> */}

      <ToastContainer />
    </div>
  );
}

export default App;
