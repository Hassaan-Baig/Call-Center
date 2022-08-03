import './App.css';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Contact } from './components/Contact Us/contact';
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

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
