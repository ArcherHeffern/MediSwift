import { useState, useEffect } from 'react';
import './App.css'
import Card from './card.tsx'
import DBdata from '../tempDB.ts';
import Modal from './modal.tsx';
import LoginModal from './loginModal.tsx';
import { Product, User } from '../types.ts';
import Axios from 'axios';
import MediLogin from "../assets/medilogin.svg"
import logo from "../assets/logo.png"


function App() {
  const [modalData, setModalData] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  const login = async (email: string, password: string) => {
    try {
    const res = await Axios.post('http://localhost:3000/api/v1/auth/login', null, {
      headers: {
        'email': email,
        'password': password
      }
    })
    setUser(res.data.data.user);
    console.log("Logged in " + JSON.stringify(user))
    } catch (e) {
      alert('Wrong email or password\n' + e);
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
    const res = await Axios.post('http://localhost:3000/api/v1/auth/signup', {
      'email': email,
      'password': password
    });
    setUser(res.data.data.user);
    } catch (e) {
      alert('Could not create a user\n' + e);
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
        <div className='logo-container'><img src={logo} alt='logo'/></div>
        {user?.email && user?.password ? <><p>{user?.email}</p><button onClick={() => setUser(null)}>Log out</button></> : <button onClick={openLoginModal} className='login-button'><img src={MediLogin} alt="Login"/></button>}
      </header>
      <div className='card-container'>
        {
          data.map((item) => {
            return <Card key={item.name} data={data} product_name={item.name} openModal={openModal} user={user} setQuantity={setQuantity} />
          })
        }
      </div>
      <Modal {...{ isOpen, onClose, data, setData }} product_name={modalData} setQuantity={setQuantity} />
      <LoginModal {...{ isLoginOpen, onLoginClose, login, signUp}} />
      <button onClick={addDummyData}>Add dummy data</button>
    </>
  )
}

export default App
