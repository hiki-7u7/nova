import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const FormEdit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        category: '', 
        description: '', 
        image: '', 
        price: '', 
        name: ''
    })

    const handleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const { data } = await axios.put(`http://localhost:3000/api/products/${params.id}`, formValues)
        console.log(data);
        alert(data.message)
        navigate('/')
    };

    const handleClose = () => {
        navigate('/')
    };

    return (
        <>

                <div className="diseñoFormulario" id="container_nuevo">
                    <form className="form" onSubmit={handleSubmit}>

                        <h2 className="titulo">Editar curso</h2>
                        <span className="close" onClick={handleClose}>
                            <img className="icon_close" src="/multimedia/close.svg" alt="" />
                        </span>
                        <div className="inputForm">
                            <input type="text" value={formValues.category} onChange={handleChange} placeholder="Categoría" name="category" required/>
                        </div>
                        <div className="inputForm">
                            <input type="text" value={formValues.image} onChange={handleChange} placeholder="Imagen" name="image" required/>
                        </div>
                        <div className="inputForm">
                            <input type="text" value={formValues.description} onChange={handleChange} placeholder="Descripción" name="description" required/>
                        </div>
                        <div className="inputForm">
                            <input type="price" value={formValues.price} onChange={handleChange} placeholder="Precio" name="price" required/>
                        </div>
                        <div className="inputForm">
                            <input type="text" value={formValues.name} onChange={handleChange} placeholder="Titulo" name="name" required/>
                        </div>
                        <div className="inputForm">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>
                </div>
        </>
    );
}
