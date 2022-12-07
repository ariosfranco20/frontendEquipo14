import { useState, useEffect } from 'react'
import './App.css'
import './css/bootstrap.min.css'
import Login from './components/Login'
import Registro from './components/Registro'
import OrdenesHome from './components/OrdenesHome'
import CrearOrden from './components/CrearOrden'
import ActualizarOrden from './components/ActualizarOrden'
import Navbar from './components/navbar'
import './css/navbarcss/navbar.css'
import { useLocation, Route, Routes } from 'react-router-dom'
import Guard from './components/guard'


function App() {

  const [user, setUser] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUser(true)
    } else {
      setUser(false)
    }
  }, [location])

  return (
    <div className="App">
      
        <Navbar userProps={user} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route 
              path="/ordenes" 
              element={<Guard isAllowed={user}>
              <OrdenesHome />
            </Guard>} />
            <Route 
              path="/actualizarOrden/:id/edit" 
              element={<Guard isAllowed={user}>
              <ActualizarOrden />
            </Guard>} />
            <Route 
              path="/crearOrden" 
              element={<Guard isAllowed={user}>
              <CrearOrden />
            </Guard>} />
          </Routes>
    </div>
  )
}

export default App
