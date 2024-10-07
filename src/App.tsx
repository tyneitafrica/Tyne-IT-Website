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
import { Consulting } from './components/ServiceDetails/Consulting';
import { SchoolSupport } from './components/ServiceDetails/SchoolSupport';
import { SoftwareInstallation } from './components/ServiceDetails/SoftwareInstallation';
import { VendorManagement } from './components/ServiceDetails/Vendor';
import { Procurement } from './components/ServiceDetails/Procurement';
import { Courses } from './components/ServiceDetails/Courses';
import { DataAnalytics } from './components/ServiceDetails/DataAnalytics';
import { Outsourcing } from './components/ServiceDetails/Outsourcing';
import { OEM } from './components/ServiceDetails/OEM';
import { services } from './components/ServiceDetails/Others/services';
import { Remaining } from './components/ServiceDetails/Others/Remaining';

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
          <Route path='/services/web-dev' element={<WebDev/>}/>
          <Route path='/services/mobile-dev' element={<MobileApp/>}/>
          <Route path='/services/ecommerce-dev' element={<EcommerceDev/>}/>
          <Route path='/services/it-consulting' element={<Consulting/>}/>
          <Route path='/services/school-support' element={<SchoolSupport/>}/>
          <Route path='/services/software-installation' element={<SoftwareInstallation/>}/>
          <Route path='/services/vendor-management' element={<VendorManagement/>}/>
          <Route path='/services/it-procurement' element={<Procurement/>}/>
          <Route path='/services/learning-courses' element={<Courses/>} />
          <Route path='/services/data-analytics' element={<DataAnalytics/>}/>
          <Route path='/services/outsourcing' element={<Outsourcing/>}/>
          <Route path='/services/oem-reseller' element={<OEM/>}/>
          {services.map((service) => (
            <Route path={service.path} element={<Remaining service={service}/>} />
          ))}

        </Route>
      </Routes>
    </Router>
  )
}

export default App
