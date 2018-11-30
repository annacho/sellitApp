import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import LoadTabs from '../Tabs';
import Logo from './logo';

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      orientation: getOrientation(500)
    }

    setOrientationListener(this.changeOrientation)
  }

  changeOrientation = () => {
    this.setState({
      orientation:getOrientation(500)
    })
  }

  componentWillUnmount(){
    removeOrientationListener()
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo
            orientation={this.state.orientation}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

export default Login;
