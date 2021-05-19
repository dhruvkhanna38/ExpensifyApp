import React from "react";
import {removeExpense} from "../actions/expenses";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

export const ExpenseListItem = (props)=>{
   return (
      <div>
         <Link to={`/edit/${props.id}`}><p>{props.description}</p></Link>
         <h3>{props.amount} - {props.createdAt}</h3>
      </div>
   )
}

export const ConnectedExpenseListItem = connect((state)=>{
   return {
      expenses: state.expenses
   }
})(ExpenseListItem)