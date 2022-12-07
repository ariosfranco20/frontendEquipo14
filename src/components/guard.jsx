const Guard = ({ isAllowed, children }) => {

    if (!isAllowed) {
        return <h2>Esta pagina no existe o usted no esta autorizado para ver su contenido</h2>
    }
    return children
}

export default Guard