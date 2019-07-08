import React from 'react';
import './App.css';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer'
import SearchPage from './components/SearchPage/SearchPage';
import BlogPage from './components/BlogPage/BlogPage';
import LandingPage from './components/Landing/LandingPage';
import SalesInfo from './components/SalesInfo/SalesInfo'
import ContactPage from './components/Contact/contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-div'>
        <NavBar />
        </div>
        <Switch>
          <Route exact path='/landingpage' component={LandingPage} />
          <Route path='/searchpage' component={SearchPage} />
          <Route path='/blogpage' component={BlogPage} />
          <Route path='/salesinfo' component={SalesInfo} />
          <Route path='/contactpage' component={ContactPage} />
        </Switch>
        <div className='foot-div'>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
