import { Route ,Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Apply from './components/Apply';
import Career from './components/Career';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Policies from './components/Policies';
function App() {
  return (<>
  <Navbar/>
  <Routes> 
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/career' element={<Career/>}/>
  <Route exact path='/policies' element={<Policies/>}/> 
  <Route exact path='/apply' element={<Apply/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  </Routes> 
  </>);
}

export default App;
