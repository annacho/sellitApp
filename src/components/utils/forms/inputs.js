import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';

const input = (props) => {
  let template = null;
  switch(props.type){
    case "textinput":
      template =
      <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.overrideStyle]}
      />
    break;
    case "picker":
      template =
        <Picker
          selectedValue={props.value}
          {...props}
        >
          {
            props.options.map((item,i)=>(
              <Picker.Item key={i} label={item} value={item}/>
            ))
          }
    break;
    default:
      return template
  }
  return template;
}

loginForm from updateInput function
  updateInput = (name,value) =>{
    this.setState({
      hasErrors:false
    })

    let formCopy = this.state.form;
    formCopy[name].value = value;

    let rules = formCopy[name].rules
    let valid = ValidationRules(value, rules, formCopy);

    console.log(valid)

    formCopy[name].valid = valid

    this.setState({
      form:formCopy
    })
  }

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor:  "#eaeaea",
    fontSize: 18,
    padding: 5,
    marginTop: 10
  },
})

export default input;
