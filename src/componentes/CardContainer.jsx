import { Card } from "./Card";

export const CardContainer = () => {
    const card = []
    return (
        <>
            <div id="productos-container">
                {card.map((card) => {
                    return <Card key={card.title} card={card}></Card>
                })}
            </div>
        </>
    )
}