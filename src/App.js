import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import "./index.css";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Home />
        <Portfolio />
        <Footer />
      
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
