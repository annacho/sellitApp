import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity } from 'react-native';

class UserPosts extends Component {
  static navigatorButtons = {
    leftButtons: Platform.OS === 'ios'?
    [
      {
        title:'Go back',
        id:'goBack'
      }
    ]
    :null
  }

  constructor(props){
    super(props);

    this.state = {
      posts:[]
    }

    if(Platform.OS === 'ios'){
      this.props.navigator.setOnNavigatorEvent((event)=>{
        if(event.id === 'goBack'){
          this.props.navigator.dismissAllModals({
            animationType:'slide-down'
          })
        }
      })
    }
  }

  componentDidMount(){
    const UID = this.props.User.userData.uid;
    this.props.getUserPosts(UID)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.User.userPosts){
      this.setState({
        posts: nextProps.User.userPosts
      })
    }
  }

  showPosts = (posts) => (
    posts ?
      posts.map( item => (
        <View style={styles.itemWrapper} key={item.id}>
          <View style={styles.itemTitle}
            <Text style={{
                fontFamily: 'Roboto-Black'}}>
              {item.Title}
            </Text>
          </View>
          <View style={styles.itemDescription}>
            <Text>{item.description}</Text>
            <View style={{marginTop:10}}>
              <Text style={styles.small}>PRICE: $ {item.price}</Text>
              <Text style={styles.small}>CATEGORY: {item.category}</Text>
            </View>
          </View>

	        <View style={styles.buttons}>
            <TouchableOpacity
              onPress={()=>alert('delete')}>
              <Text
                style={{
                  fontFamily:'Roboto-Black',
                  color:'#f44336',
                  paddingBottom:10
                }}>
                Delete Post
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      ))
    :null
  )

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginBottom:30}}>
            <Text>You have {this.state.posts.length} posts</Text>
          </View>

          {this.showPosts(this.state.posts)}

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  itemWrapper:{
    borderWidth:1,
    borderColor:'#ececec',
    borderRadius: 2,
    marginBottom:20
  },
  itemTitle:{
    borderBottomWidth:1,
    borderBottomColor:'#ececec',
    padding:10,
    backgroundColor:'#f5f5f5'
  },
  itemDescription:{
  padding:10
  },
  small:{
    fontSize:12
  },
  buttons:{
    alignItems:'center'
  }
})

function mapStateToProps(state){
  console.log(state)
  return{
    User: state.User
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getUserPosts},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPosts);
