import React, { useState, useEffect } from "react";


const MainPage = () => {
    
    return(
        <div className="m-32 bg-gray-200 flex justify-center items-center ">
            <p className="text-3xl">Make Tarot Prediction</p>
            <label htmlFor="name">Name (4 to 8 characters):</label>

            <input
            type="text"
            id="name"
            name="name"
            required
            size={10} />
        </div>
    )
};

export default MainPage;