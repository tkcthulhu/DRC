import { Routes, Route } from "react-router-dom";

//Page Imports
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services_home, Commissioning, Automation_Consulting, Panel_BO, PCT, PlanSpec, RetroFit } from "./components/pages/services/Services_main"
import { Blog_home } from "./components/pages/blog/Blog_main";
import { Gallery_home } from "./components/pages/gallery/Gallery_main";
import { Contact } from './components/pages/Contact';

import '././css/App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services/'>
          <Route path='' element={<Services_home/>}/>
          <Route path='planspec' element={<PlanSpec/>}/>
          <Route path='retrofit' element={<RetroFit/>}/>
          <Route path='panel-build-out' element={<Panel_BO/>}/>
          <Route path='commissioning' element={<Commissioning/>}/>
          <Route path='peripheral-control-termination' element={<PCT/>}/>
          <Route path='automation-consulting' element={<Automation_Consulting/>}/>
        </Route>
        < Route path="/blog/" element={<Blog_home/>}>
          //For sub paths
        </Route>
        <Route path="/gallery/" element={<Gallery_home/>}>
          //For sub paths
        </Route>
        <Route path='/contact/' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
