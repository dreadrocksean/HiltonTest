import React from 'react';
import { shallow } from 'enzyme';

// import renderer from 'react-test-renderer';
import AppRadioGroup from './AppRadioGroup';

const props = {
  handleChange: () => console.log('handling change'),
  value: 'Test Value',
  style: {},
  group: { values: [], label: '' },
};

it('renders without crashing', () => {
  shallow(<AppRadioGroup {...props} />);
});

// describe('AppRadioGroup component renders correctly', () => {
//   it('renders correctly', () => {
//     const rendered = renderer.create(<AppRadioGroup {...props} />);
//     expect(rendered.toJSON()).toMatchSnapshot();
//   });
// });

// test('Expect component to be called at least once', () => {
//   const wrapper = shallow(<AppRadioGroup {...props} />);
//   expect(wrapper.find('.radioGroup').length).toEqual(1);
// });
