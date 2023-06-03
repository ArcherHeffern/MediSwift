import { useState } from 'react';
import './App.css'
import Card from './card.tsx'
import data from './tempDB.ts';
import Modal from './modal.tsx';

function App() {

  const [modalData, setModalData] = useState({key: 'value'});
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
    // TODO: data stuff
  }

  return (
    <>
    <header>
      <h1>Logo</h1>
    </header>
    <div className='card-container'>
    { 
    data.map((item) => {
      return <Card key={item.name} {...item} openModal={openModal}/>
    })
  } 
    </div>
    <Modal {...{modalData, isOpen, onClose}}/>
    </>
  )
}

export default App
