import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import axios from 'axios'


const OrdenesForm = ({datos, ordenId})=>{

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const customSubmit = (dataForm, e) => {
      const ordenObject = {
        fecha: dataForm.fecha,
        hora: dataForm.hora,
        estado: dataForm.estado,
        ancho: dataForm.ancho,
        alto: dataForm.alto,
        largo: dataForm.largo,
        peso: dataForm.peso,
        dirRecogida: dataForm.dirRecogida, 
        ciuRecogida: dataForm.ciuRecogida,
        nomDestinatario: dataForm.nomDestinatario,
        idDestinatario: dataForm.idDestinatario, 
        dirEntrega: dataForm.dirEntrega, 
        ciuEntrega: dataForm.ciuEntrega, 
        userId : localStorage.getItem('user_id')
    } 
      if(isEdit){
        axios.put('https://redux.up.railway.app/ordenes/actualizar/' + ordenId, ordenObject )
          .then(response =>{
            console.log(response.data)
            alert('Se actualizo la orden exitosamente!')
          })
        
      }else{
        axios
          .post("https://redux.up.railway.app/ordenes/crear", ordenObject)
          .then(response => console.log(response.data))
          e.target.reset()
          alert('Orden creada!')
      }
      

    }


    const [isEdit, setisEdit] = useState(false)

    useEffect(()=>{//Es una funcion que se ejecuta cada vez que el componente se renderiza
        if(datos.length !== 0){//Pregunto cuando el componente se renderiza la primera vez
          setisEdit(true)
          setValue('fecha', datos.fecha)//Datos input --- datos api
          setValue('hora', datos.hora)
          setValue('estado', datos.estado)
          setValue('ancho', datos.ancho)
          setValue('alto', datos.alto)
          setValue('largo', datos.largo)
          setValue('peso', datos.peso)
          setValue('dirRecogida', datos.dirRecogida)
          setValue('ciuRecogida', datos.ciuRecogida)
          setValue('nomDestinatario', datos.nomDestinatario)
          setValue('idDestinatario', datos.idDestinatario)
          setValue('dirEntrega', datos.dirEntrega)
          setValue('ciuEntrega', datos.ciuEntrega)
        }

    }, []) 

    return(
        <div className='container'>
        <div className="row justify-content-center align-items-center g-2" id='crearOrden'>
          <div className="col-md-10">
            <div className="card 'justify-content-center'">
              <div className="card-body" id='margin'>
                  <div className="row">
                    <form onSubmit={handleSubmit(customSubmit)}>
                      <div className="mb-2 row">
                        <div className="col-md-4">
                            <label htmlFor="fecha" className="col-4 col-form-label">Fecha</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                {...register("fecha", { required: true })}
                                aria-invalid={errors.fecha ? "true" : "false"}
                            />
                                {errors.fecha && <small><p>Campo requerido</p></small>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="hora" className="col-4 col-form-label">Hora</label>
                            <input 
                                type="time" 
                                className="form-control" 
                                {...register("hora", { required: true })}
                                aria-invalid={errors.hora ? "true" : "false"}
                            />
                            {errors.hora && <small><p>Campo requerido</p></small>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="estado" className="col-4 col-form-label">Estado</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Estado" 
                                {...register("estado", { required: true, pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.estado ? "true" : "false"}
                            />
                            {errors.estado && <small><p>Campo requerido - Sin espacios - Sin caracteres especiales (-*/+.;:) - Solo letras (ABC)</p></small>}
                        </div>
                      </div>
                      <div className="mb-5 row">                         
                        <div className="col-md-3">
                            <label htmlFor="ancho" className="col-4 col-form-label">Ancho</label>
                            <input 
                                type="number" 
                                className="form-control"
                                placeholder="Ancho" 
                                {...register("ancho", { required: true })}
                                aria-invalid={errors.ancho ? "true" : "false"}
                            />
                            {errors.ancho && <small><p>Campo requerido</p></small>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="alto" className="col-4 col-form-label">Alto</label>
                            <input 
                                type="number" 
                                className="form-control"
                                placeholder="Alto" 
                                {...register("alto", { required: true })}
                                aria-invalid={errors.alto ? "true" : "false"}
                            />
                            {errors.alto && <small><p>Campo requerido</p></small>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="largo" className="col-4 col-form-label">Largo</label>
                            <input 
                                type="number" 
                                className="form-control"
                                placeholder="Largo" 
                                {...register("largo", { required: true })}
                                aria-invalid={errors.largo ? "true" : "false"}
                            />
                            {errors.largo && <small><p>Campo requerido</p></small>}
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="peso" className="col-4 col-form-label">Peso</label>
                            <input 
                                type="number" 
                                className="form-control"
                                placeholder="Peso" 
                                {...register("peso", { required: true })}
                                aria-invalid={errors.peso ? "true" : "false"}
                            />
                            {errors.peso && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="dirRecogida" className="col-4 col-form-label">Direccion de recogida</label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Direccion de Recogida" 
                                {...register("dirRecogida", { required: true })}
                                aria-invalid={errors.dirRecogida ? "true" : "false"}
                            />
                            {errors.dirRecogida && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="ciuRecogida" className="col-4 col-form-label">Ciudad recogida</label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Ciudad de Recogida" 
                                {...register("ciuRecogida", { required: true })}
                                aria-invalid={errors.ciuRecogida ? "true" : "false"}
                            />
                            {errors.ciuRecogida && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="nomDestinatario" className="col-4 col-form-label">Nombre destinatario</label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Nombre del Destinatario" 
                                {...register("nomDestinatario", { required: true })}
                                aria-invalid={errors.nomDestinatario ? "true" : "false"}
                            />
                            {errors.nomDestinatario && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="idDestinatario" className="col-4 col-form-label">Cedula/Nit destinatario</label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Cedula/Nit del Destinatario" 
                                {...register("idDestinatario", { required: true })}
                                aria-invalid={errors.idDestinatario ? "true" : "false"}
                            />
                            {errors.idDestinatario && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="dirEntrega" className="col-4 col-form-label">Direccion de entrega</label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Direccion de Entrega" 
                                {...register("dirEntrega", { required: true })}
                                aria-invalid={errors.dirEntrega ? "true" : "false"}
                            />
                            {errors.dirEntrega && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-5 row">
                        <label htmlFor="ciuEntrega" className="col-4 col-form-label">Ciudad de entrega</label>
                        <div className="col-8">
                        <input 
                                type="text" 
                                className="form-control"
                                placeholder="Ciudad de Entrega" 
                                {...register("ciuEntrega", { required: true })}
                                aria-invalid={errors.ciuEntrega ? "true" : "false"}
                            />
                            {errors.ciuEntrega && <small><p>Campo requerido</p></small>}
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="offset-sm-5 col-sm-4">
                          <button type="submit" className="btn btn-outline-success">{isEdit ? "Actualizar Orden" : "Crear Orden"}</button>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default OrdenesForm