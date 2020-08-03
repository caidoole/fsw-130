import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import MainDisplayOfPage from './mainDisplay/MainDisplayOfPage';
import Footer from './footer/Footer'
import ThemeProvider from "./context/ThemeProvider"



function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <MainDisplayOfPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
