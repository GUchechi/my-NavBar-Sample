 import './App.css';
 import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
 import NavBar from '../src/components/pages/Navbar/NavBar'
 import Home from '../src/components/pages/Home'
 import KeyFeature  from '../src/components/pages/KeyFeature'
 import Pricing from '../src/components/pages/Pricing'
 import Testimonials from '../src/components/pages/Testimonial'
 import Demo from '../src/components/pages/Demo'


function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/feature' element={<KeyFeature/>}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/testimonial' element={<Testimonials />}/>
          <Route path='/demo' element={<Demo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
