import React from "react";
import {connect} from "react-redux";
import {ConnectedExpenseListItem} from "./ExpenseListItem"
import {getVisibleExpenses} from "../selectors/expenses";
import {ConnectedExpenseListFilters} from "./ExpenseListFilters";

export const ExpenseList = (props)=>{
   return (
      <div>
         { props.expenses.length===0 ? 
           (<p>No Expenses</p>):(
           props.expenses.map((expense)=>{
               return <ConnectedExpenseListItem key={expense.id} {...expense}></ConnectedExpenseListItem>
           }))
         }
         <ConnectedExpenseListFilters></ConnectedExpenseListFilters>
      </div>
   )
}

export const ConnectedExpenseList = connect((state)=>{
   return {
      expenses: getVisibleExpenses(state.expenses, state.filters)
   }
})(ExpenseList)

