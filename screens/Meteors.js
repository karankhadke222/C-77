import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default class MeteorScreen extends Component {
  render() {
    return (
      <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>MeteorScreen!</Text>
            </View>
        )
    }
}