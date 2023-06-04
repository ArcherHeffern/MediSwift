import { useState, useEffect, SetStateAction } from 'react';
import './App.css'
import Card from './card.tsx'
import DBdata from '../tempDB.ts';
import Modal from './modal.tsx';
import LoginModal from './loginModal.tsx';
import { Product, User } from '../types.ts';
import Axios from 'axios';


function App() {
  const [modalData, setModalData] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data, setData] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);


  const onClose = () => {
    setIsOpen(false);
  }

  const onLoginClose = () => {
    setIsLoginOpen(false);
  }

  const openModal = (name: string) => {
    setIsOpen(true);
    setModalData(name);
  }
  const openLoginModal = () => {
    setIsLoginOpen(true);
  }

  const successfulLogin = async (email: string, password: string) => {
    const res = await Axios.post('http://localhost:3001/api/v1/auth/login', {
      headers : {
        'email': email,
        'password': password
      }
    })
    if (res.status === 200) {
      setEmail(email);
      setPassword(password);
      setIsOpen(false);
    } else {
      alert('Wrong email or password');
    }

  }

  const setQuantity = async (id: string, quantity: number) => {
    await Axios.put(`http://localhost:3000/drug/${id}`, { quantity: quantity }, {
      headers: {
        email: user?.email, password: user?.password
      }
    }
    )

    setData(data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity
        }
      }
      return item
    }))
  }

  async function setLocalData() {
    const res = await Axios.get(`http://localhost:3000/api/v1/drugs`)
    setData(res.data)
  }

  useEffect(() => {
    // TODO: get data from db
    setLocalData()
  }, [])

  async function addDummyData() {
    const promises = []
    for (const data of DBdata) {
      promises.push(Axios.post(`http://localhost:3000/api/v1/drug`, { data }, { headers: { email: 'admin', password: '123' } }))
    }
    await Promise.all(promises)
    setLocalData();
  }

  return (
    <>
      <header>
        <h1>Logo</h1>
      </header>
      <div className='card-container'>
        {
          data.map((item) => {
            return <Card key={item.name} data={data} product_name={item.name} openModal={openModal} user={user} setQuantity={setQuantity} />
          })
        }
      </div>
      <Modal {...{ isOpen, onClose, data, setData }} product_name={modalData} setQuantity={setQuantity} />
      <button onClick={addDummyData}>Add dummy data</button>
    <header>
      <h1>Logo</h1>
      {email && password ? <p>{email}</p> : <button onClick={openLoginModal}>Login</button>}
    </header>
    <div className='card-container'>
    { 
    data.map((item) => {
      return <Card key={item.name} data={data} product_name={item.name} openModal={openModal} isSeller={isSeller} setQuantity={setQuantity}/>
    })
  } 
    </div>
    <Modal {...{isOpen, onClose, data, setData}} product_name={modalData} setQuantity={setQuantity}/>
    <LoginModal {...{isLoginOpen, onLoginClose, successfulLogin}} />
    </>
  )
}

export default App
