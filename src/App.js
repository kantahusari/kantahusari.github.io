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
import Cookies from 'universal-cookie';
import axios from 'axios'



export default function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Resume' component={Resume} />
        <Route exact path='/Services' component={Services} />
        <Redirect to="/" />
      </Switch>
    </HashRouter >

  )
}
