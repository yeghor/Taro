import React from "react";
import type { FullCard } from "../fetching/fetching";
import { MEDIA_URL as mediaURLMaker } from "../fetching/fetching";


const FullCardComp = ({ card }: { card: FullCard }) => {
    return (
        <div className="mx-auto my-6 rounded-2xl border border-violet-200 bg-white shadow-md hover:shadow-xl transition-shadow">
            <div className="overflow-hidden rounded-t-2xl">
                <img
                    src={mediaURLMaker(card.image_name)}
                    alt={card.name}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <div className="p-5 space-y-4">
                <h2 className="text-xl font-semibold text-violet-700 text-center">
                    {card.name}
                </h2>

                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                        Upright meaning
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        {card.description}
                    </p>
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                        Reversed meaning
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        {card.flipped_description}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default FullCardComp;