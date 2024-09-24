import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProjectDetails } from './components/ProjectDetails';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import { WebDev } from './components/ServiceDetails/WebDev';
import { MobileApp } from './components/ServiceDetails/MobileApp';
import { EcommerceDev } from './components/ServiceDetails/Ecommerce';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About/>}/>
          <Route path='services' element={<Services />} />
          <Route path='portfolio'element={<Portfolio/>}/>
          <Route path='portfolio/:projectname' element={<ProjectDetails/>}/>
          <Route path='/services/Web design & Development' element={<WebDev/>}/>
          <Route path='/services/Mobile App Development' element={<MobileApp/>}/>
          <Route path='/services/Ecommerce' element={<EcommerceDev/>}/>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
