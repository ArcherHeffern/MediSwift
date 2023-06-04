import { useState, useEffect } from 'react';
import './App.css'
import Card from './card.tsx'
import DBdata from './tempDB.ts';
import Modal from './modal.tsx';

type Product = {
  name: string;
  description: string;
  quantity: number;
  price: number;
};

function App() {
  const [isSeller, setIsSeller] = useState(false);
  const [modalData, setModalData] = useState<Product|object>({});
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  const onClose = () => {
    setIsOpen(false);
  }

  const openModal = (name: string) => {
    setIsOpen(true);
    data.filter((item) => item.name === name).map((item) => setModalData(item))
  }
  
  useEffect(() => {
    // get data from db
    setData(DBdata)
  }, [])

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
      return <Card key={item.name} {...item} openModal={openModal} isSeller={isSeller}/>
    })
  } 
    </div>
    <Modal {...{modalData, isOpen, onClose}}/>
    </>
  )
}

export default App
