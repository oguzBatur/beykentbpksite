import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Events from './components/Events/Events';
function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/etkinlikler' element={<Events/>}/>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
