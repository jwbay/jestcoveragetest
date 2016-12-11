import * as React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <Checkbox labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});