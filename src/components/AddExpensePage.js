import React from "react";
import {ExpenseForm} from "./ExpenseForm"
import {connect} from "react-redux";
import {addExpense} from "../actions/expenses";

export class AddExpensePage extends React.Component {
   onSubmit = (expense)=>{
      this.props.addExpense(expense);
      this.props.history.push("/");
   }

   render(){
      return (
         <div>
         Create Component
         <ExpenseForm onSubmit={this.onSubmit}></ExpenseForm>
         </div>
      )
   }
}

const mapDispatchToprops = (dispatch) => ({
   addExpense: (expense) => dispatch(addExpense(expense))
});

export const ConnectedAddExpensePage = connect(undefined, mapDispatchToprops)(AddExpensePage)