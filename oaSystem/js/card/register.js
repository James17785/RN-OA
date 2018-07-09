/**
 * register
 */

 import React, { Component } from 'react';
 import {
     Text,
     View,
     StyleSheet,
     TextInput,
     Button
 } from 'react-native';
 import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";

 export default class Register extends Component {
     constructor(props){
        super(props);
        
     }
     static navigationOptions = {
         headerTitle:'Register',
         headerStyle:{
            backgroundColor:'#99f'
        },
        headerLeft:<View/>
     }
     componentDidMount(){
        
     }
     render(){
        const { navigate } = this.props.navigation;
              
         return(
            <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.itemText}>Staff ID:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your backup'
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>English Name:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your backup'
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>Email Address:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your backup'
                />
            </View>    
            <View style={styles.items}>
                <Text style={styles.itemText}>RM Email:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your backup'
                />
            </View> 
            <View style={styles.items}>
                <Text style={styles.itemText}>Project:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your backup'
                />
            </View>  

            <View style={styles.items}>
               <View style={styles.submitBtn}>
                    <Button  
                        onPress={ ()=>{
                            console.log("=========");
                            fetch('http://localhost:8081/public/dummy/ot_resp.json')
                            .then((respon) =>respon.json())
                            .then((response) => {
                                console.log("==success");
                                navigate('Home',{});
                            }).catch((error) =>{
                                console.log(error);
                            })
                        } } 
                        title="Submit"
                        color='white'
                   />
                </View>
            </View>                               
          </View>
         )
     }

 }
    const submitRegister=(navigate)=>{
       // const { navigate } = this.props.navigation;
       console.log("=========");
        fetch('http://localhost:8081/public/dummy/ot_resp.json')
        .then((respon) =>respon.json())
        .then((response) => {
            navigate('MyInfo',{});
        }).catch((error) =>{
            console.log(error);
        })
    }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#F5FCFF',
      justifyContent:'flex-start',
      paddingLeft:10,
      paddingTop:10,
      paddingRight:10,
      
    },
    items:{
      flexDirection:'row',
      margin: 10,
    },
    itemText:{
      fontSize:20,
      textDecorationLine:'underline',
      color: '#333333',
      fontFamily: 'Times',
    },
    inputField:{
        borderColor: 'gray',
        borderWidth: 1,
        padding:5,
        flex:1
    },
    submitBtn:{
        backgroundColor:'red',
        flex:1,
    }
  });