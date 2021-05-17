import React from 'react';
import classes from './Error.module.css';
import Card from './Card';
import Button from './Button';
import ReactDom from 'react-dom';

const Backdrop = (props) =>{
    return (
        <div className={classes.backdrop} onClick={props.errorHandle}></div>
    )
};

const ModelOverlay = (props) =>{
     return (
        <Card className={classes.modal} onClick={props.errorHandle}>
        <header classes={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}><p>
            {props.message}</p></div>
        <footer className={classes.actions}>
            <Button onClick={props.errorHandle}>Okay</Button>
        </footer>
    </Card>
     )
};
const ErrorModel = (props) => {

    //Props children gives whatever is passed
    return (
         <React.Fragment>
          {ReactDom.createPortal(<Backdrop errorHandle={props.errorHandle}/>,document.getElementById('backdrop-root'))}
          {ReactDom.createPortal(<ModelOverlay errorHandle={props.errorHandle}
          title={props.title} message={props.message}/>,document.getElementById('overlay-root'))}
         </React.Fragment>   
    );
       
};


export default ErrorModel;