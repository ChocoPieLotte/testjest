import React from 'react';
import { Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info'
import { Counter } from '../src/scenes/Counter';

import {shallow} from 'enzyme';


jest.mock('react-native-device-info', () => ({
  getDeviceId: jest.fn(() => 'deviceId'),
  getBundleId: jest.fn(() => 'com.fake.bundle')
}));

jest.mock('Alert', () => ({
  alert: jest.fn(),
}));

describe('Counter', () => {
  const decrement = jest.fn();
  const increment = jest.fn();
  const wrapper = shallow(<Counter decrement={decrement} increment={increment}/>);

  it('renders correctly', () => {
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should call decrement', () => {
    const button = wrapper.findWhere(n => n.key() === 'key_decrement');
    button.simulate('press');
    expect(decrement).toBeCalled();
  });

  it('should call increment', () => {
    const button = wrapper.findWhere(n => n.key() === 'key_increment');
    button.simulate('press');
    expect(increment).toBeCalled();
  });

  it('should input text and change state', () => {
    const input = wrapper.find('TextInput');
    input.simulate('ChangeText', 'sample text');
    expect(wrapper.state('text')).toEqual('sample text');
  });

  it('should call showBundle', () => {
    const spy = jest.spyOn(wrapper.instance(), 'showBundle');
    const button = wrapper.findWhere(n => n.key() === 'key_bundle');
    button.simulate('press');
    expect(spy).toBeCalled();
    expect(DeviceInfo.getBundleId).toBeCalled();
    expect(Alert.alert).toBeCalledWith('com.fake.bundle');
  });

});