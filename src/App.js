import React from 'react'
import ListImage from './components/ListImage'
import Filter from './components/Filter'
import Nav from './components/Nav'
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
      </Switch>
    </div>
  )
}

export default App
