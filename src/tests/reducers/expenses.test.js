import {expensesReducer} from "../../reducers/expenses";
import {expenses} from "../fixtures/expenses";

test("should set default state", ()=>{
   const state = expensesReducer(undefined, {type:"@INIT"})
   expect(state).toEqual([]);
})

test("should remove expense by id", ()=>{
   const action  = {
      type:"REMOVE_EXPENSE",
      id: expenses[1].id
   }
   const state = expensesReducer(expenses, action)

   expect(state).toEqual([expenses[0], expenses[2]])
});   

test("should not remove id if not found", ()=>{
   const action = { 
      type:"REMOVE_EXPENSE",
      id:"4"
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual(expenses)
});

test("should add an expense", ()=>{
   const expense = {
      id: "5",
      description:"Dog Food",
      amount:195,
      note:'',
      createdAt:0
                  }

   const action = {
      type:"ADD_EXPENSE",
      expense
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual([...expenses, expense])
})

test("should edit and expense", ()=>{
   const amount = 122000;

   const action = {
      type:"EDIT_EXPENSE",
      id:expenses[0].id,
      updates:{
         amount
      }
   }
   const state = expensesReducer(expenses, action)
   expect(state[1].amount).toEqual(expenses[1].amount)
})

test("should not edit an expense if not found", ()=>{
   const amount = 122000;
   const action = {
      type:"EDIT_EXPENSE",
      id:"5",
      updates:{
         amount
      }
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual(expenses)

})