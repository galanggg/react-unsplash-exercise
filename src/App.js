import React from 'react'
import ListImage from './components/ListImage'
import Filter from './components/Filter'
import Nav from './components/Nav'
import Experiment from './components/Experiment'
import Debouncing from './components/Debouncing'
import './App.css'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <h4 className="mt-4">Unsplash Infinite Loading</h4>
      <Switch>
        <Route path="/" exact component={ListImage} />
        <Route path="/filter" exact component={Filter} />
        <Route path="/experiment" exact component={Experiment} />
        <Route path="/debouncing" exact component={Debouncing} />
      </Switch>
    </div>
  )
}

export default App
