import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";


// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [state,changeImage]=useState(0);

    const handleNext=()=>{
        if (state<images.length-1){
        changeImage((previous)=>previous+1)
        }
    }
    const handlePrevious=()=>{
        if (state>0){
        changeImage((previous)=>previous-1)}
    }

    return (
        <div className="container">
            <div onClick={handlePrevious} className="arrow"><ArrowBackIosIcon /></div>
            <div style={{backgroundImage:`url(${images[state].img})`}} className="Image">
                <h1>{images[state].title}</h1>
                <h2>{images[state].subtitle}</h2>
            </div>
            <div onClick={handleNext} className="arrow"><ArrowForwardIosIcon /></div>
        </div>
    )
}

export default Carousel;