import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './Pages/Home';
import Notfound from './Pages/NotFounds';
import About from './Pages/About';
import Service from './Pages/Service';
import Product from './Pages/Product';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Notfound/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/feedback' element={<Feedback/>}/> */}
          {/* <Route path='/seefeedback' element={<SeeFeedback/>}/> */}
          {/* <Route path= '/profile' element={<Profile/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
