import React, { useState, useEffect } from "react";
import { fetchAllCards, type FullCard } from "../fetching/fetching";
import FullCardComp from "./card";

const AllCards = () => {
    const [cards, setCards] = useState<FullCard[]>([])

    useEffect(() => {
        const useEffectInnerAsyncFunc = async () => {
            const cardsResponse = await fetchAllCards();
            if (cardsResponse) { setCards(cardsResponse.cards) };            
        };
        useEffectInnerAsyncFunc();
    }, [])

    return(
        <div className="columns-3 mx-8 my-4">
            {cards.map((card) => {
                return (
                    <FullCardComp card={card} />
                )
            })}
        </div>
    )
};

export default AllCards;