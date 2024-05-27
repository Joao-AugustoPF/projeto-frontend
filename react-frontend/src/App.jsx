import './App.css'
import {Routes, Route, Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import CadastroProdutos from './components/CadastroProdutos'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
      </Routes>
    </>
  )
}

export default App
