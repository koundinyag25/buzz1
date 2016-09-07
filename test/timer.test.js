import React from 'react';
import { expect } from 'expect';
import { shallow } from 'enzyme';
import { CountdownTimer } from '../src/components/timer';
describe ('component : timer ',()=>{

  const props = {
    time: ''
  };
  it('should do start the coutdown timer on click',()=>{
    const wrapper = shallow(<CountdownTimer {...props}/>);
    expect(wrapper.length).toEqual(1);

  });
});
