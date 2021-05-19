import {ExpenseDashboardPage} from '../../components/ExpenseDashboardPage'
import React from "react";
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";


// test("should render header correctly",()=>{
//    const renderer = new ReactShallowRenderer();
//    renderer.render(<Header></Header>)
//    expect(renderer.getRenderOutput()).toMatchSnapshot();
// })

test("should render Expense Dashboard Page correctly",()=>{
      const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>) 
      expect(toJson(wrapper)).toMatchSnapshot();
   })

