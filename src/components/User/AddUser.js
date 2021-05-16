import React, { useState } from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helper/Wrapper';


const AddUser = (props) => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        console.log(enteredUserName, enteredAge, "::Values");
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"Invalid Input",
                message:"Please enter a valid name or age (non empty values)"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:"Invalid Input",
                message:"Please enter a age greater than 0"
            })
            return;
        }
        props.usenameUsersHandler(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const errorHandle = () =>{
        setError(null)  
   }

    const usenameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} errorHandle={errorHandle} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" value={enteredUserName} onChange={usenameChangeHandler} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form></Card>
        </Wrapper>);
};


export default AddUser;