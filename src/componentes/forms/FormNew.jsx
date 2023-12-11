import { useState } from 'react';
import axios from 'axios';


export const FormNew = () => {
    const [showForm, setShowForm] = useState(false);
    const [formValues, setFormValues] = useState({
        category: '', 
        description: '', 
        image: '', 
        price: '', 
        name: ''
    })

    const handleOpen = () => {
        setShowForm(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:3000/api/products/create', formValues )
        console.log(data)
        setShowForm(false);
        location.reload()
    };

    const handleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const handleClose = () => {
        setShowForm(false);
    };

    return (
        <>
            {!showForm ? (
                <button className="pagination-button" onClick={handleOpen}>Agregar Curso</button>
            ) : (
                <div className="diseñoFormulario" id="container_nuevo">
                    <form className="form" onSubmit={handleSubmit}>

                        <h2 className="titulo">Agregar nuevo curso</h2>
                        <span className="close" onClick={handleClose}>
                            <img className="icon_close" src="/multimedia/close.svg" alt=""/>
                        </span>
                        <div className="inputForm">
                            <input type="text" value={formValues.category} onChange={handleChange} placeholder="Categoría" name="category" />
                        </div>
                        <div className="inputForm">
                            <input type="text" value={formValues.image} onChange={handleChange} placeholder="Imagen" name="image" />
                        </div>
                        <div className="inputForm">
                            <input type="text" value={formValues.description} onChange={handleChange} placeholder="Descripción" name="description" />
                        </div>
                        <div className="inputForm">
                            <input type="price" value={formValues.price} onChange={handleChange} placeholder="Precio" name="price" />
                        </div>
                        <div className="inputForm">
                            <input type="text" value={formValues.name} onChange={handleChange} placeholder="Titulo" name="name" />
                        </div>
                        <div className="inputForm">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>
                </div>
            )}
        </>
    );
}

