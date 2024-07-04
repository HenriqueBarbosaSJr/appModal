
import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'

function App() {
  const [ openModal, setOpenModal ] = useState<boolean>(false);

  const data={
    codcomp:1,
    codcli:2,
    codpro:3,
    qtda:877,
    preco:87.98,
    datacomp:'02/6/2024'
  }

  return (
    <>
      <button onClick={()=>{setOpenModal(true)}}>Modal</button>
     
     <Modal 
          isOpen={openModal} 
          setOpen={setOpenModal}
          data={data}
     />
    
    </>
  )
}

export default App
