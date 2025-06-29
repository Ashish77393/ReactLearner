import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {


  return (
    <>
      <h1>This is used Tailwind and Props</h1>
      <Card nature="Ashish" des="this is a good view"/>
       <Card nature="Sanjiv" />
    </>
  )
}

export default App
