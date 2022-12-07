import { useForm } from "react-hook-form";
import '../css/authcss/registro.css'
import { Link } from 'react-router-dom'
import axios from "axios"

const Registro = ()=>{

    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data, e) => { 
        axios
        .post("https://redux.up.railway.app/users/create", data)
        .then(response => {
            if (response.status === '200') {
            }
        })
        e.target.reset()
        alert('Registro exitoso!')
        console.log('register data', data)
     }


    return(
        <div className="row justify-content-center align-items-center g-2" id='registro'>
            <div className="col-md-5">
                <div className="card 'justify-content-center'">
                    <div className='container1'>
                    <Link to='/login'>Iniciar sesion</Link>
                    </div>
                    <h3>REDUX - Registro</h3>
                    <div className="card-body">
                        <div className="">
                            <form onSubmit={handleSubmit(customSubmit)}>
                                <div className="mb-3 row">
                                    <label htmlFor="username" className="col-4 col-form-label">Usuario</label>
                                    <div className="col-8">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        {...register("username", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 10, minLength:5 })}
                                        aria-invalid={errors.username ? "true" : "false"}
                                    />
                                    {errors.username && <small><p>Campo requerido - Sin espacios - Sin caracteres especiales (-*/+.;:) - Solo letras (ABC), con 5 caracteres como minimo y 10 como maximo</p></small>}
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="password" className="col-4 col-form-label">Contraseña</label>
                                    <div className="col-8">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        {...register("password", { required: true, maxLength: 10, minLength:5 })}
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                    {errors.password && <small><p>Campo requerido - se requiere minimo 5 caracteres y maximo 10</p></small>}
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="email" className="col-4 col-form-label">Correo Electronico</label>
                                    <div className="col-8">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        {...register("email", { required: true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })}
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    {errors.email && <small><p>Campo requerido. Ejemplo: xxx@xxx.com</p></small>}
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="offset-sm-4 col-sm-8">
                                        <button type="submit" className="btn btn-outline-success">Registrarse</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registro