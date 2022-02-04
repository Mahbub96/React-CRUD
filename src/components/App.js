import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Contract from "./pages/Contract";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import View from "./users/View";







function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />


          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contract' component={Contract}/>
            <Route exact path='/users/add' component={AddUser}/>
            <Route exact path='/users/edit/:id' component={EditUser}/>
            <Route exact path='/users/view/:id' component={View}/>
            {/* <Route exact path='/admin/login' component={Login}/> */}

            <Route component={NotFound}/>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
