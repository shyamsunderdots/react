import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from './components/home';
import Elements from './components/Elements';
import Generic from './components/Generic';


const routing = (
    <Router>
    <div>
     <Route exact path="/" component={Home} ></Route>
     <Route exact path="/generic" component={Generic} ></Route>
     <Route exact path="/elements" component={Elements} ></Route>
    </div>        
    </Router>

)

ReactDOM.render(routing, document.getElementById('root'));
