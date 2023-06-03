import { useState } from 'react'
import './App.css'
import Card from './card.tsx'

function App() {

  return (
    <>
    <header>
      <h1>Logo</h1>
    </header>
    <div className='card-container'>
    {
      <Card />
    }
    </div>
    </>
  )
}

export default App
