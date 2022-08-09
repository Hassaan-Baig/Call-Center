import './App.css';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import About from './components/About';
import Cyber from './components/Cyber';
import Navbar from './components/Navbar';
import { Contact } from './components/Contact Us/contact';
import Difference from './components/Difference'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Difference' element={<Difference/>}/>
        <Route path='/Cyber' element={<Cyber/>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
