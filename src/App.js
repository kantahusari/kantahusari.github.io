/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import Home from "./Component/Home/Home"
import Resume from "./Component/Pages/Resume/Resume"
import Services from "./Component/Pages/Services/Services"
import Login from "./Component/Pages/Login/Login"
import Calendar from "./Component/Pages/Calendar/Calendar"
import Day from "./Component/Pages/Day/Day"
import Edit from "./Component/Pages/Day/Edit"
import Cookies from 'universal-cookie';
import axios from 'axios'



export default function App() {
  return (

    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Resume' component={Resume} />
        <Route exact path='/Services' component={Services} />
        <Route exact path='/Calendar' component={Calendar} />
        <Route exact path='/Calendar/Day' component={Day} />
        <Route exact path='/Calendar/Edit' component={Edit} />
        <Route exact path='/Login' component={Login} />
        <Redirect to="/" />
      </Switch>
    </HashRouter >

  )
}
