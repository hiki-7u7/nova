import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";

const getAllProducts = async() => {
    const { data } = await axios.get('http://localhost:3000/api/products')
    return data
}

export const CardContainer = () => {

    const [cards, setCards] = useState([])

    useEffect(()=>{
        getAllProducts().then( c => setCards(c))
    },[]) 

    return (
        <>
            <div id="productos-container">

                {
                    cards.length <= 0
                    ? (<h1>No hay cursos</h1>)
                    : (cards.map((card) => {
                        return <Card key={card.name} card={card}></Card>
                    }))
                }
            </div>
        </>
    )
}