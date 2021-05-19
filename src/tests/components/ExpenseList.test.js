import React from "react";
import {shallow} from 'enzyme';
import {ExpenseList} from "../../components/ExpenseList";
import {expenses} from "../fixtures/expenses";


test("should render ExpenseList with expenses", ()=>{
   const wrapper = shallow(<ExpenseList expenses={expenses}></ExpenseList>)
   expect(wrapper).toMatchSnapshot()
})

test("shpould render expense List with empty array", ()=>{
   const wrapper = shallow(<ExpenseList expenses={[]}></ExpenseList>)
   expect(wrapper).toMatchSnapshot()
})