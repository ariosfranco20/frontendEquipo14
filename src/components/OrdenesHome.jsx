import { Link } from "react-router-dom"
import '../css/authcss/gestionPaquetes.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import dateFormat from "dateformat"

const labels = [
    "# orden",
    "Fecha",
    "Ciudad Entrega",
    "Direccion Entrega",
    "Estado"
]


const Ordenes = ()=>{

    const [ordenes, setOrdenes] = useState(null)
    const [update, setUpdate] = useState(false)
    useEffect(()=>{
        const userId = localStorage.getItem('user_id')
        axios.get('https://redux.up.railway.app/ordenes?userId=' + userId)
        .then(response =>{
            console.log(response.data)
            // const fecha = response.data.fecha
            // response.data.fecha = dateFormat(fecha, "yyyy-mm-dd")
            // console.log(response.data.fecha)
            // console.log(response.data)
            setOrdenes(response.data)
        })
    }, [update])

    return(
        <div className='tabla'>
                <div className="table-responsive" id="divtabla">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                {labels.map((label, index)=>{
                                    return(
                                        <th scope="col" key={index}>{label}</th>  
                                    )
                                })}
                                
                            </tr>
                        </thead>
                        <tbody>
                            {ordenes !== null ? ordenes.map((orden, index)=>{
                                return(
                                <tr key = {index}>
                                    <td scope="row"><Link to={'/actualizarOrden/'+orden._id+'/edit'}>{index}</Link></td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.ciuEntrega}</td>
                                    <td>{orden.dirEntrega}</td>
                                    <td className='text-success'>{orden.estado}</td>
                                </tr>
                                )
                            }) : ''}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Ordenes