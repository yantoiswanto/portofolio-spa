import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Sidebar from './components/SideBar';
import { data } from './data/dataSidebar';
import './App.css';
import { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container flex items-center justify-center w-full h-full">
        <div className="h-48 border-2 border-green-800 w-60">
          <h3 className="font-bold text-center text-green-800">404 NotFound</h3>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container flex items-start justify-start">
          <Sidebar listSidebar={data} />
          <Routes>
            <Route path="/experience" element={<Experience />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
