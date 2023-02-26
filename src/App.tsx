import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import Main from './Main'
import NavBar from './Components.Main/NavBar/NavBar'

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Main/>
    </div>
  )
}

export default App
