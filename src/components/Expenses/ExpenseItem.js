import React, { useState } from 'react'

import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const[title, setTitle] = useState(props.title);
  const titleHandler = () =>{
    setTitle('updated');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={titleHandler}> click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
