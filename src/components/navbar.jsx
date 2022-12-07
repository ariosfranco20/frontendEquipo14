import { NavLink } from "react-router-dom"//NavLink me deja sombreado el boton o enlace sobre el cual algo click
import { useEffect, useState } from "react"

const Navbar = ({ userProps }) => {

    const [user, setUser] = useState(false)

    useEffect(() => {
        console.log(userProps)
        setUser(userProps)
    })

    const logOut = () => {
        localStorage.removeItem('user_id')
        setUser(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="">REDUX</a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                    {user ? <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/crearOrden">Crear Orden</NavLink>
                        </li> : ''}
                        {user ? <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/ordenes">Lista de Ordenes</NavLink>
                        </li> : ''}
                        {user ? <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/login"
                                onClick={() => logOut()}>Cerrar sesion</NavLink>
                        </li> : ''}
                        {user ? '' : <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/login">Iniciar sesion</NavLink>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar