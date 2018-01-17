import React, { Component } from 'react'
import Loading from './components/Loading'
import RecipesContainer from './recipes/RecipesContainer'
import LoadErrors from './components/LoadErrors'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />
        <RecipesContainer />
        <LoadErrors />
      </div>
    )
  }
}

export default App
