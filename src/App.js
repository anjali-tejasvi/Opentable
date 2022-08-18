import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Placed from './components/Placed';
import Summary from './components/Summary';
import Signup from './components/Signup';
import ProtectedRoute from "./components/ProtectedRoute";
import {UserAuthContextProvider} from './context/UserAuthContext';
import HeaderTwo from './components/HeaderTwo';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <div>
      <UserAuthContextProvider>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/headerTwo' element={<HeaderTwo/>} />
      <Route path='/cart' element={ <Cart />}  />
      <Route path='/placed' element={
      <ProtectedRoute>
        <Placed />
      </ProtectedRoute>} />
      <Route path='/summary' element={
      <ProtectedRoute>
        <Summary />
      </ProtectedRoute>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={ <Login />}  />
      </Routes>
      </UserAuthContextProvider>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
