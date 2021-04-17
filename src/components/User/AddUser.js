import React from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';

const addUserHandler = (event) =>{
    event.preventDefault();
}

const AddUser = (props) =>{
     return(<Card className={classes.input}><form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label> 
      <input id="username" type ="text"/>
      <label htmlFor="age">Age(Years)</label> 
      <input id="age" type ="number"/>
      <Button type="submit">Add User</Button>
     </form></Card>);   
};


export default AddUser;