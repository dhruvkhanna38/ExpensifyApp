import {NotFoundPage} from '../../components/NotFoundPAge'
import React from "react";
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";


// test("should render header correctly",()=>{
//    const renderer = new ReactShallowRenderer();
//    renderer.render(<Header></Header>)
//    expect(renderer.getRenderOutput()).toMatchSnapshot();
// })

test("should render Not Found Page correctly",()=>{
      const wrapper = shallow(<NotFoundPage></NotFoundPage>) 
      expect(toJson(wrapper)).toMatchSnapshot();
   })

