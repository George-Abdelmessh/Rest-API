import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className="sec">
            <div className="con">
                <img src={props.image} ></img>
                <h3>{props.title}</h3>
                <h3 style={{color:'rgba(7,49,87,1)'}}>Price: {props.price}$</h3>
                <h3 style={{color:'rgba(7,49,87,1)'}}>Rate: {props.rate}</h3>
            </div>
        </div>
    )
}

export default Card;