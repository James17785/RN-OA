/**
 * OT page
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  EditView,
  Button
} from 'react-native';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";

import MyDatePicker from '../utility/myDatePicker';

export default class LeaveInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            staffID:"",
            name:"",
            project:"",
            phone:"",
            backup:"",
            durate:0
        }
    }
    componentDidMount(){
        fetch('http://localhost:8081/public/dummy/ot_resp.json')
        .then((respon) =>respon.json())
        .then((response) => {
            console.log("get data ===",response);
            this.setState({
                staffID:response.body.staffID,
                name:response.body.name,
                project:response.body.project,
                phone:response.body.phone
            })
        }).catch((error) =>{
            console.log(error);
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.itemText}>员工编号:</Text>
                <Text style={styles.itemText}>{this.state.staffID}</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>姓名:</Text>
                <Text style={styles.itemText}>{this.state.name}</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>联系电话:</Text>
                <Text style={styles.itemText}>{this.state.phone}</Text>
            </View>            
            <View style={styles.items}>
                    <Text style={styles.itemText}>所在项目:</Text>
                    <Text style={styles.itemText}>{this.state.project}</Text>
            </View>                           
            <View style={styles.items}>
                <Text style={styles.itemText}>提交时间:</Text>
                <MyDatePicker></MyDatePicker>
            </View>    

            <View style={styles.items}>
                    <Text style={styles.itemText}>描述:</Text>
                    <TextInput style={styles.inputField} 
                    ref = "leaveBackup"
                    onChangeText={(text) => this.setState({backup:text})}
                    placeholder='Please input your backup'
                />
            </View>   
          
            <View style={styles.items}>
               <View style={styles.submitBtn}>
                    <Button  
                        onPress={ submitLeave } 
                        title="Submit"
                        color='white'
                   />
                </View>
            </View> 
          </View>
        );
      }

    }

    const submitLeave = () =>{
        fetch('http://localhost:8081/public/dummy/ot_resp.json')
        .then(res=>res.json())
        .then(responseBody=>{
            alert("Your request has been submited!");
        }).catch(err=>{
            alert("You quest failed!");
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