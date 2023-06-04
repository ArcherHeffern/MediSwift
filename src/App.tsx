import { useState, useEffect } from 'react';
import './App.css'
import Card from './card.tsx'
import DBdata from './tempDB.ts';
import Modal from './modal.tsx';
import { Product } from './types.ts';

function App() {
  const [isSeller, setIsSeller] = useState(false);
  const [modalData, setModalData] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  const onClose = () => {
    setIsOpen(false);
  }

  const openModal = (name: string) => {
    setIsOpen(true);
    setModalData(name);
  }

  const setQuantity = (name: string, newQuantity: number) => {
    // TODO: Update db
    setData(data.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          quantity: newQuantity
        }
      }
      return item
    }))
  }

  useEffect(() => {
    // TODO: get data from db
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
      return <Card key={item.name} data={data} product_name={item.name} openModal={openModal} isSeller={isSeller} setQuantity={setQuantity}/>
    })
  } 
    </div>
    <Modal {...{isOpen, onClose, data, setData}} product_name={modalData} setQuantity={setQuantity}/>
    </>
  )
}

export default App
