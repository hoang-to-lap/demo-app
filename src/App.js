import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Layout from './componets/layout';
import Home from './pages/home';
import './styles/style.scss'
import About from './pages/about';
import Contact from './pages/contact';
import OutStore from './pages/outstore';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path ="/" element = {<Layout/>} >
<Route index="/" element = {<Home/>} />
<Route path="/about" element = {<About/>} />
<Route path="/contact" element = {<Contact/>} />
<Route path="/store" element = {<OutStore/>} />
</Route>
    </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
