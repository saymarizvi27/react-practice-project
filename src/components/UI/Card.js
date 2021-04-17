import React from 'react';
import classes from './Card.module.css';

const Card = (props) =>{
     //Props children gives whatever is passed
     return(<div className={`${classes.card} ${props.className}`}>{props.children}</div>);   
};


export default Card;