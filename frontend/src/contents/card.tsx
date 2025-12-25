import React from "react";
import type { FullCard } from "../fetching/fetching";
import { MEDIA_URL as mediaURLMaker } from "../fetching/fetching";

// FullCard type
// export interface FullCard {
//     name: string;
//     desription: string;
//     flipped_description: string;
//     image_name: string;
// }


const FullCardComp = (props: { card: FullCard }) => {
    const cardData = props.card;

    return(
        <img  src={mediaURLMaker(cardData.image_name)} alt="card img" />
    );
};

export default FullCardComp;