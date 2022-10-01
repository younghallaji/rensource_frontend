import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import './index.css';
import About from './components/About/About';
import CaseStudy from './components/CaseStudy/CaseStudy';
import SingleCaseStudyOne from './components/SingleCaseStudy/SingleCaseStudyOne';
import SingleCaseStudy2 from './components/SingleCaseStudy/SingleCaseStudy2';
import SingleCaseStudy1 from './components/SingleCaseStudy/SingleCaseStudy1';
import Offering from './components/Offering/Offering';
import PressReleasPage from './components/PressReleases/PressReleasPage';
import Contact from './components/Contact/Contact';
import Faqs from './components/Faqs/Faqs';
import SinglePressRelease from './components/PressReleases/SinglePressRelease';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Blog from './components/Blog/Blog';
import NotFound from './components/Error/404';
import Homepage from './Homepage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop> 
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/our-projects' element={<CaseStudy/>} />
          <Route path='/case-one-details' element={<SingleCaseStudy2 />} />
          <Route path='/case-two-details' element={<SingleCaseStudy1/>} />
          <Route path='/faqs' element={<Faqs/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/news' element={<PressReleasPage/>} />
          <Route path='/offering' element={<Offering/>} />
          <Route path='/news/:id' element={<SinglePressRelease/>}/>
          <Route path='/project/:id' element={<SingleCaseStudyOne/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </ScrollToTop>
  </HashRouter>
  )
}

export default App;
