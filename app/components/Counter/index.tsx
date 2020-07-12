import React, {Component} from 'react';
import {Alert, Button, View} from 'react-native';
class Counter extends Component {
  onPress = () => {
    Alert.alert('Button with adjusted color pressed');
  };

  render() {
    return (
      <View>
        <Button title="ADD" color="#f194ff" onPress={this.onPress} />
      </View>
    );
  }
}

export default Counter;
