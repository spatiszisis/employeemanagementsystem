import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add_employee" component={AddEmployee} />
                <Route path="/edit_employee/:id" component={EditEmployee} />
            </Switch>
        </Router>
    )
}

export default App
