
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Sheared/Header/Header';
import Footer from './Components/Sheared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import Services from './Components/Pages/Services/Services';

function App() {
  return (
    <div className="App">
      {/* header  */}
      <Header></Header>
      {/* routs */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
      {/* footer  */}
      <Footer></Footer>
    </div>
  );
}

export default App;
