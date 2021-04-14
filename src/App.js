import React from 'react'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Details from './pages/Details'
import Favoris from './pages/Favoris'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Header />
                <Switch>
                    <Route  exact path='/' component={Home} />
                    <Route  path='/Meals' component={Meals} />
                    <Route  path='/Details' component={Details} />
                    <Route  path='/Favoris' component={Favoris} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default App