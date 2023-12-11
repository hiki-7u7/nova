import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

// import { FormEdit } from "./forms/formEdit";

export const Card = ( {card} ) => {


    const handleDelete = async (id) => {
        console.log('eliminando curso con el id' + card._id)
        const {data} = await axios.delete(`http://localhost:3000/api/products/${id}`);
        alert(data.message);
        location.reload();
    };

    return (
        <>
            <div className="tarjeta-producto">
                <div>titulo: <h3 className="nombre_producto">{card.name}</h3></div>
                <img  src={card.image} width={200} height={200} alt={card.name}/>
                <p className="descripcion">{card.description}</p>
                <p className="precio">${card.price}</p>
                <p>{card.category}</p>
                <button className="card-btn-delete" onClick={ () => handleDelete(card._id) }>Delete</button>
            </div>
            <Link to={`/editar-curso/${card._id}`}>EditarCurso</Link>
        </>
    );
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}