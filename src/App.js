import React, { Component } from 'react'
import Routes from './routes'
import Loading from './components/Loading'
import LoadErrors from './components/LoadErrors'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />
        <Routes />
        <LoadErrors />
      </div>
    )
  }
}

export default App
