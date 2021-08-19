import React from 'react'
import { Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/registro.css'
import {useForm} from '../hooks/useForm'
import {registroEmailPasswordNombre} from '../actions/actions'
import {useDispatch} from 'react-redux'

const Registro = () => {
    const dispatch = useDispatch();
    const [ values, handleInputChange, reset ] = useForm({
        name: '',
        email:'',
        password1:'',
        password2:''
    })

    const {name, email, password1, password2} = values;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, password1, name))
    }

    return (
        <div>
                <Form onSubmit={handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value = {name}   

                        onChange= {handleInputChange}

                    />
                </Form.Group>
 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value = {email} 
                        onChange={handleInputChange}
                        />
                        </Form.Group>
         
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value = {password1} 
                                onChange={handleInputChange}
                            />
                        </Form.Group>
         
                        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                            <Form.Label>Repita contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password2"
                                value = {password2} 
                                onChange={handleInputChange}
                            />
                        </Form.Group>
         
                        <Button variant="primary" type="submit">
                            Registrarse
                        </Button>
         
                       
                    </Form>


        </div>
    )
}

export default Registro
