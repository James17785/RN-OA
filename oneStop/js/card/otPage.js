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
  Button,
  Alert
} from 'react-native';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import ModalDropdown from 'react-native-modal-dropdown';

import MyDatePicker from '../utility/myDatePicker';

export default class OTInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            staffID:"",
            name:"",
            project:"",
            phone:"",
            email:"",
            department:""
        }
    }
    componentWillMount(){

    }

    componentDidMount(){
               console.log('4444');
        fetch('http://localhost:8081/public/dummy/ot_resp.json')
        .then((respon) =>respon.json())
        .then((response) => {
            console.log("get data ===",response);
           
            this.setState({
                staffID:response.body.staffID,
                name:response.body.name,
                project:response.body.project,
                phone:response.body.phone,
                email:response.body.email,
                department:response.body.department
            })
        }).catch((error) =>{
            console.log(error);
        })
    }
  render() {
    const { navigate } = this.props.navigation;
    let staffID = this.state.staffID;
    let name = this.state.name;
    let project = this.state.project;
    let phone = this.state.phone;
    console.log('33333');

    return (
        <View style={styles.container}>
        <View style={styles.items}>
            <Text style={styles.itemText}>员工编号:</Text>
            <Text style={styles.itemText}>{staffID}</Text>
        </View>
        <View style={styles.items}>
            <Text style={styles.itemText}>姓名:</Text>
            <Text style={styles.itemText}>{name}</Text>
        </View>
        <View style={styles.items}>
            <Text style={styles.itemText}>联系电话:</Text>
            <Text style={styles.itemText}>{phone}</Text>
        </View>
        <View style={styles.items}>
                <Text style={styles.itemText}>所在项目:</Text>
                <Text style={styles.itemText}>{project}</Text>
        </View>
        <View style={styles.items}>
            <Text style={styles.itemText}>类型:</Text>
            <ModalDropdown options={['挂失', '找失主']} 
            textStyle={styles.optionText} 
            defaultValue="请选择类型"/>
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
                    placeholder='请添加你的描述'
                />
        </View> 
      
        <View style={styles.items}>
           <View style={styles.submitBtn}>
                <Button  
                    onPress={ submitOT  } 
                    title="Submit"
                    color='white'
               />
            </View>
        </View> 
      </View>
    );
  }
}

const submitOT= ()=>{
    let requestParas = {
        staffID:'12345678',
        name:'James',
        project:'msp',
        startTime:'20:00',
        endTime:'22:00',
        duration:'2'
    }
   
    fetch('http://localhost:8081/public/dummy/ot_resp.json',
    // {
    //     method:'POST',
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         staffID:requestParas.staffID,
    //         name:requestParas.name,
    //         project:requestParas.project,
    //         startTime:requestParas.startTime,
    //         endTime:requestParas.endTime,
    //         duration:requestParas.duration
    //     }) }
   )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.body);
        alert("Your request has been submited!");
      })
      .catch((error) => {
        console.error(error);
        alert("You quest failed!");
      });
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
    optionText:{
      fontSize:20,
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