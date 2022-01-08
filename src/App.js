import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import  Home  from './Pages/Home';
import { Room } from './Pages/Room';
import { SingleRoom } from './Pages/SingleRoom';
import {BookNow}from './Pages/BookNow'
// import { Login } from './Pages/Login';
import Error from './Pages/Error';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Navbar } from './components/Navbar';
import { User } from './components/User';
// import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Container, Row, Col, ToastContainer } from "react-bootstrap";
import BookingDetails from './components/BookingDetails';
import AddHotel from './components/AddHotel';
import UpdateHotel from './components/UpdateHotel';
import Admin from './components/Admin';
import { createStore } from 'redux';
import contactReducer from './redux/reducers/AddReducer'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import Login2 from './components/Login2';
// import Signup from './components/Signup'
// import { AuthProvider } from './contexts/AuthContext';
const store = createStore(contactReducer ,composeWithDevTools())
function App() {
  return (
    <div className="App">
      <ToastContainer>
      <Provider store={store}>

      <Router>
      <UserAuthContextProvider>

        <Navbar></Navbar>
       <Routes>
       <Route
                path="/bookingdetails"
                element={
                  <ProtectedRoute>
                    <BookingDetails />
                  </ProtectedRoute>
                }
              />
      <Route exact path="/add" element={<AddHotel/>}></Route>
      <Route exact path="/edit/:id" element={<UpdateHotel></UpdateHotel>} />
      <Route exact path="/admin" element={<Admin></Admin>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     <Route path="/" element={<Home />} />
     {/* <Route path="/login" element={< User/>} />   */}
     <Route path="/booknow" element={< BookNow/>} />
      <Route path="/room" element={<Room />} />  
      <Route path="/about" element={<About />} />  
      <Route path="/contact" element={<Contact />} />  
      <Route path="/room/:roomid" element={<SingleRoom />} />  
      <Route path="/error" element={<Error />} />  

      </Routes>
      </UserAuthContextProvider>

      </Router>
      </Provider>
      </ToastContainer>

    </div>
  );
}

export default App;
