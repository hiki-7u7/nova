import { useState } from 'react';


export const FormEdit = () => {
    const [showForm, setShowForm] = useState(false);

    const handleOpen = () => {
        setShowForm(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowForm(false);
    };

    const handleClose = () => {
        setShowForm(false);
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
                            <input type="text" placeholder="Categoría" name="category" />
                        </div>
                        <div className="inputForm">
                            <input type="text" placeholder="Imagen" name="image" />
                        </div>
                        <div className="inputForm">
                            <input type="text" placeholder="Descripción" name="description" />
                        </div>
                        <div className="inputForm">
                            <input type="price" placeholder="Precio" name="price" />
                        </div>
                        <div className="inputForm">
                            <input type="text" placeholder="Titulo" name="title" />
                        </div>
                        <div className="inputForm">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>
                </div>
        </>
    );
}
