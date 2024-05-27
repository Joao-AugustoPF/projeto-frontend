import './App.css'
import {Routes, Route, Router, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import CadastroProdutos from './components/CadastroProdutos'
import Login from './components/Login'
import Registro from './components/Registro'

function App() {

  const location = useLocation()

  const showNavbar = location.pathname !== "/login" && location.pathname !== "/registro";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  )
}

export default App
