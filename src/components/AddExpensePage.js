import React from "react";
import {ExpenseForm} from "./ExpenseForm"
import {connect} from "react-redux";
import {addExpense} from "../actions/expenses";

export const AddExpensePage = (props)=>{
   return (
      <div>
         Create Component
         <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(addExpense(expense))
            props.history.push("/");
         }}></ExpenseForm>
      </div>
   )
}

export const ConnectedAddExpensePage = connect()(AddExpensePage)