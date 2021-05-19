// import ReactShallowRenderer from "react-test-renderer/shallow";
import {Header} from "../../components/Header";
import React from "react";
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";


// test("should render header correctly",()=>{
//    const renderer = new ReactShallowRenderer();
//    renderer.render(<Header></Header>)
//    expect(renderer.getRenderOutput()).toMatchSnapshot();
// })

test("should render header correctly",()=>{
      const wrapper = shallow(<Header></Header>) 
      expect(toJson(wrapper)).toMatchSnapshot();
   })


