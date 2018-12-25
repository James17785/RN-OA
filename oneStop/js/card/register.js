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
                <Text style={styles.itemText}>员工编号:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your staff ID'
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>姓名:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your name'
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>邮箱:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your email'
                />
            </View>    
            <View style={styles.items}>
                <Text style={styles.itemText}>部门:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your department'
                />
            </View> 
            <View style={styles.items}>
                <Text style={styles.itemText}>所在项目:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your project'
                />
            </View>  
            <View style={styles.items}>
                <Text style={styles.itemText}>电话:</Text>
                <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your phone number'
                />
            </View>  
            <View style={styles.items}>
               <View style={styles.submitBtn}>
                    <Button  
                        onPress={ ()=>{
                            console.log("=========");
                            fetch('http://localhost:8081/public/dummy/my_resp.json')
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