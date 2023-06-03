import { useState } from 'react'
import './App.css'
import Card from './card.tsx'
import data from './tempDB.ts';

function App() {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <>
    <header>
      <h1>Logo</h1>
      <button onClick={() => {
        setIsSeller(!isSeller)
      }}>Switch</button>
    </header>
    <div className='card-container'>
    { 
    data.map((item) => {
      return <Card {...item} isSeller={isSeller}/>
    })
  } 
    </div>
    </>
  )
}

export default App
