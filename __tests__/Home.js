import 'react-native';
import React from 'react';
import Home from '../src/scenes/Home';

import {shallow} from 'enzyme';

describe('Home', () => {
  const navigation = {
    navigate: jest.fn()
  };
  const wrapper = shallow(<Home navigation={navigation} />);

  it('renders correctly', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should call navigate', () => {
    const button = wrapper.find('TouchableOpacity');
    button.simulate('press');
    expect(navigation.navigate).toBeCalledWith('Counter');
  });
});
