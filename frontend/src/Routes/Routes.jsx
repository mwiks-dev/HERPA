import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from '../layouts/header/Header'
import Home from '../pages/Home/Home'



const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Routes
