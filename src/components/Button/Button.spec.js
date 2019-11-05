import React from 'react';
import { shallow } from 'enzyme';


import Button from './';

const defaultProps = {
  text: 'Test',
  onClick: jest.fn()
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Button {...setupProps}>Test</Button>);
};

describe('Tests for Button', () => {
  test('should render without error', () => {
    const wrapper = setup();
    expect(wrapper.length).toBeGreaterThanOrEqual(1);
  });

  test('should render circle green button', () => {
    const wrapper = setup({circle: true, circleState: true});
    const buttonCirle = wrapper.find('.Button__circle--true');

    expect(wrapper).toEqual(buttonCirle);
  })
  
});