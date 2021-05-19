import React from "react";
import {connect} from "react-redux";
import {ExpenseForm} from "./ExpenseForm";
import {editExpense, removeExpense} from '../actions/expenses'

export const EditExpensePage = (props)=>{
   return (
      <div>
         {console.log(props.expense)}
         <ExpenseForm 
         expense= {props.expense}
         onSubmit= {
            (expense)=>{
               props.dispatch(editExpense(props.expense.id, expense))
               props.history.push('/')
            }
         }>
         </ExpenseForm>
         <button onClick={(e)=>{
            props.dispatch(removeExpense({id:props.expense.id}))
            props.history.push('/')
         }}>Remove</button>
      </div>
   )
}

const mapStateToProps = (state, props)=>{
   return {
      expense: state.expenses.find((expense)=>{
         return expense.id === props.match.params.id
      })
   }
}

export const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage);