import './App.css'
import Card from './card.tsx'
import data from './tempDB.ts';

function App() {
  return (
    <>
    <header>
      <h1>Logo</h1>
    </header>
    <div className='card-container'>
    { 
    data.map((item) => {
      return <Card {...item}/>
    })
  } 
    </div>
    </>
  )
}

export default App
