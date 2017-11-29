import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counter from '../redux/actions/counter';
import { colors } from '../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    fontWeight: 'bold',
    fontSize: 70
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 40,
    height: 40,
    margin: 8
  },
  buttonText: {
    color: 'black',
    fontSize: 24
  },
  input: {
    backgroundColor: 'gray',
    alignSelf: "center",
    width: '80%',
    height: 44
  }
});


export class Counter extends Component {
  static defaultProps = {
    count: 0
  };

  static propTypes = {
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    count: PropTypes.number
  };

  state = {
    text: ''
  };

  showBundle = () => Alert.alert(DeviceInfo.getBundleId());

  render() {
    const { count, decrement, increment } = this.props;
    return (
      <View style={styles.container}>
        <Text>{DeviceInfo.getDeviceId()}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={styles.count}>{count}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            key={'key_decrement'}
            style={[styles.button, { backgroundColor: colors.flatRed }]}
            onPress={() => decrement()}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={'key_increment'}
            style={[styles.button, { backgroundColor: colors.flatGreen }]}
            onPress={() => increment()}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity key={'key_bundle'} onPress={this.showBundle}>
          <Text>Show Bundle</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state => ({ count: state.counter.count }),
  dispatch => bindActionCreators({
    decrement: counter.decrement,
    increment: counter.increment
  }, dispatch)
)(Counter);
