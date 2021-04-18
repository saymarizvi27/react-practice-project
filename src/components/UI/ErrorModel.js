import React from 'react';
import classes from './Error.module.css';
import Card from './Card';
import Button from './Button';


const ErrorModel = (props) => {
    //Props children gives whatever is passed
    return (
    <div>
    <div className={classes.backdrop}> 
    </div>
    <Card className={classes.modal}>
        <header classes={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}><p>
            {props.message}</p></div>
        <footer className={classes.actions}>
            <Button>Okay</Button>
        </footer>
    </Card>
    </div>);
};


export default ErrorModel;