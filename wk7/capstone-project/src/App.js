import React from 'react';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pronouns from './pages/Pronouns'
import Sexualities from './pages/Sexualities'
import GenderIdentities from './pages/GenderIdentities'
import './StyleSheet.css'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path='/pronouns' component={Pronouns} />
        <Route path='/sexualities' component={Sexualities} />
        <Route path='/genderIdentities' component={GenderIdentities} />
      </Switch>
      <Footer />
    
    </div>
  );
}

export default App
