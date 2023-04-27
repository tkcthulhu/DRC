import { Routes, Route } from "react-router-dom";

//Page Imports
import { Layout } from './components/layout/Layout';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services_home, Commissioning, Consulting, PlanSpec, RetroFit } from "./components/pages/services/Services_main"
import { Blog_home } from "./components/pages/blog/Blog_main";
import { Gallery_home } from "./components/pages/gallery/Gallery_main";
import { Contact } from './components/pages/Contact';

import '././css/App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services_home/>}>
          <Route path='commissioning' element={<Commissioning/>}/>
          <Route path='consulting' element={<Consulting/>}/>
          <Route path='planspec' element={<PlanSpec/>}/>
          <Route path='retrofit' element={<RetroFit/>}/>
        </Route>
        < Route path="/blog" element={<Blog_home/>}>
          //For sub paths
        </Route>
        <Route path="/gallery" element={<Gallery_home/>}>
          //For sub paths
        </Route>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
