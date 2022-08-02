import './App.css';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Difference from './components/Difference'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Difference' element={<Difference/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
