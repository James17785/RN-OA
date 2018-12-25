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
  ListView,
  Linking,
  Button
} from 'react-native';
import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";


import MyDatePicker from '../utility/myDatePicker';

export default class LeaveInfo extends Component {
    constructor(props){
        super(props);
       const dss = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            staffID:"",
            name:"",
            project:"",
            phone:"",
            backup:"",
            durate:0,
            dataSource:dss.cloneWithRows([
        {
            "name": "",
            "phone": ""
        }]),
            isLoading: true
        }
    }
    componentDidMount(){
        fetch('http://localhost:8081/public/dummy/summary.json')
        .then((respon) =>respon.json())
        .then((response) => {
            console.log("get data ===",response);
             // 创建datasource数据源
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                staffID:response.body.staffID,
                name:response.body.name,
                project:response.body.project,
                phone:response.body.phone,
                dataSource: ds.cloneWithRows(response.body.list)//data.result为模拟的数据或服务端得到的数据
            })
            console.log("111111111");
        }).catch((error) =>{
            console.log(error);
        })
    }

     render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    
                />
            </View>
        );
      }
      calling(number){
        alert("拨打电话");
        return Linking.openURL('tel:'+number);
      }
    renderRow(rowData){
        return(
            <View style={styles.itemStyle}>
                <View style={styles.imageStyle}>
                  <Text style={{marginTop:5, fontSize:17}}>{rowData.type}</Text>
                  <TouchableOpacity onPress={()=>this.calling(rowData.phone)}>
                   <Image style={{width:40,height:40}} source={require('../images/phone.jpg')}/>
                  </TouchableOpacity> 
                </View>
                
                <View style={styles.subItemStyle} >
                    <Text style={{marginTop:5, fontSize:15}}>申请人姓名:{rowData.name}</Text>
                    <Text style={{marginTop:5, fontSize:15}}>申请人项目:{rowData.project}</Text>
                    <Text style={{marginTop:5, fontSize:15}}>申请人电话:{rowData.phone}</Text>
                    <Text style={{marginTop:5, fontSize:15}}>提交时间:{rowData.raiseDate}</Text>
                    <Text style={{marginBottom:5, fontSize:13, color:'green'}}>简介:{rowData.description}</Text>
                    
                </View>
            </View>
        );
    }       
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
        submitBtn:{
          backgroundColor:'red',
          
          width:20,
          height:20,
          marginLeft:5,
          margin:5,
          borderColor: 'gray',
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
            flex:1
        },

        itemStyle: {
            
            flexDirection:'row',
            borderBottomWidth:1,
            borderBottomColor:'gray'
        },

        imageStyle: {
            width:60,
            height:60,
            marginLeft:10,
            margin:10
        },

        subItemStyle: {
            justifyContent:'space-around'
        }      
      })