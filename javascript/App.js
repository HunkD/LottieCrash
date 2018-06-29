import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Animation from 'lottie-react-native'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Animation
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            style={{width: 120, height: 120, justifyContent: 'center', alignItems: 'center'}}
            source={require('../asset/lottie/initLoading.json')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
