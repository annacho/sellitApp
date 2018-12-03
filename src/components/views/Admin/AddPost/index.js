import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigatorDrawer } from '../../../utils/misc';

class AddPost extends Component {
  constructor(props){
  super(props);

  this.props.navigator.setOnNavigatorEvent((event)=>{
    navigatorDrawer(event,this)
  })

  render() {
    return (
      <Text>AddPost</Text>
    );
  }
}

const styles = StyleSheet.create({

});

export default AddPost;
