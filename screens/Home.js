import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}>

        <View style={styles.titleBar}>
          <Text style={styles.titleText}>ISS Tracker App!</Text>
        </View>

        <TouchableOpacity style={styles.routeCard}onPress={() => 
        this.props.navigation.navigate("ISS Location")}>
          <Text style={styles.routeText}> ISS Location </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}onPress={() => 
        this.props.navigation.navigate("Meteors")}>>
          <Text style={styles.routeText}>Meteorss </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCard: {
    flex: 0.225,
    marginLeft: 75,
    marginRight:75,
    marginTop: 75,
    borderRadius: 30,
    backgroundColor: '#ed42dc',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#212fed',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 75,
    paddingLeft: 60,
  },
});
