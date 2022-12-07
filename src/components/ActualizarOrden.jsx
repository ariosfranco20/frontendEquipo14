import { useParams } from "react-router-dom";
import '../css/authcss/actualizarOrden.css'
import OrdenesForm from "./ordenesForm";
import { useState, useEffect } from "react" //useEffect lo utilizo para hacer algo cuando el componente se cargue
import axios from 'axios'
import dateFormat from "dateformat"


const ActualizarOrden = ()=>{

    const { id } = useParams()//Me toma el valor del parametro que se pasa en la URL /actualizarOrden/:id cuando le doy click al enlace del numero "id" en la tabla de lista de ordenes
    const [orden, setOrden] = useState(null)

    useEffect(()=>{
      axios
      .get(`https://redux.up.railway.app/ordenes/${id}`)
      .then(response => {
          console.log(response.data)
          const fecha = response.data.fecha
          response.data.fecha = dateFormat(fecha, "yyyy-mm-dd")
          setOrden(response.data)
      })
}, [])

    return(
      <>
        {orden ? (
                <>
                    <OrdenesForm datos={orden} ordenId={id} />
                </>
            ) : ''}
      </>
    )
}

export default ActualizarOrden