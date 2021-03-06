import React from "react";
import {shallow} from 'enzyme';
import {EditExpensePage} from "../../components/EditExpensePage";
import { expenses } from "../fixtures/expenses";


let editExpense, removeExpense , history, wrapper;

beforeEach(()=>{
   editExpense = jest.fn();
   removeExpense = jest.fn();
   history = {push: jest.fn() };
   wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]}></EditExpensePage>)
})

test("should render EditExpensePage Correctly", ()=>{
   //expect(wrapper).toMatchSnapshot();
})

// test("should handle edit expense", ()=>{
//    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
//    expect(history.push).toHaveBeenCalledWith('/');
//    expect(editExpense).toHaveBeenCalledWith(expenses[2].id), expenses[2];
// })

