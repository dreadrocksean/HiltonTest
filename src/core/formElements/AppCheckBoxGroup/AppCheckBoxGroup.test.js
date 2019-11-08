import React from 'react';
import { shallow } from 'enzyme';

// import renderer from 'react-test-renderer';
import AppCheckBoxGroup from './AppCheckBoxGroup';

const props = {
  handleChange: () => console.log('handling change'),
  value: [],
  style: {},
  group: { values: [], label: '' },
};

it('renders without crashing', () => {
  shallow(<AppCheckBoxGroup {...props} />);
});

// describe('AppCheckBoxGroup component renders correctly', () => {
//   it('renders correctly', () => {
//     const rendered = renderer.create(<AppCheckBoxGroup {...props} />);
//     expect(rendered.toJSON()).toMatchSnapshot();
//   });
// });

// test('Expect component to be called at least once', () => {
//   const wrapper = shallow(<AppCheckBoxGroup {...props} />);
//   expect(wrapper.find('.radioGroup').length).toEqual(1);
// });
