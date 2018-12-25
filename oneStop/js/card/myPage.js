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
  YellowBox,
  Image,
  NavigatorIOS,
  ListView,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Register from './register';

// const Home = StackNavigator({

//     regist:{
//         screen: Register,
//     }
// });

export default class MyInfo extends Component {
    constructor(props){
        super(props);
        const dss = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            staffID:'',
            name:'',
            project:'',
            phone:'',
            email:'',
            department:'',
            navigate : this.props.navigation,
            dataSource:dss.cloneWithRows([
            {
                "name": "",
                "phone": ""
            }]),
            isLoading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:8081/public/dummy/my_resp.json')
        .then((respon) =>respon.json())
        .then((response) => {
            console.log("get data ===",response);
            let status = response.header.statusCode
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            if(status == 200){
                this.setState({
                    staffID:response.body.staffID,
                    name:response.body.name,
                    project:response.body.project,
                    phone:response.body.phone,
                    email:response.body.email,
                    department:response.body.department,
                    dataSource: ds.cloneWithRows(response.body.list)//data.result为模拟的数据或服务端得到的数据
                })
            }else{
                const { navigate } = this.props.navigation;
                navigate('regist',{});
            }
            
        }).catch((error) =>{
            console.log(error);
        })
    }
      render() {
        // const { navigate } = this.props.navigation;
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
                <Text style={styles.itemText}>邮件:</Text>
                <Text style={styles.itemText}>{this.state.email}</Text>
            </View>    
            <View style={styles.items}>
                <Text style={styles.itemText}>部门:</Text>
                <Text style={styles.itemText}>{this.state.department}</Text>
            </View> 
            <View style={styles.items}>
                <Text style={styles.itemText}>所在项目:</Text>
                <Text style={styles.itemText}>{this.state.project}</Text>
            </View>  
            <View style={styles.items}>
                <Text style={styles.itemText}>电话:</Text>
                <Text style={styles.itemText}>{this.state.phone}</Text>
            </View>   
            <View style={styles.items}>
                <Text style={styles.itemText}>我的申请:</Text>
            </View>             
            <View style={styles.items}>
                
                <View style={styles.container}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        
                    />
                </View>                
            </View>  

          </View>
        );
      }
      deleteItem(rowData){
        fetch('http://localhost:8081/public/dummy/my_resp.json')
        .then((respon) =>respon.json())
        .then((response) => {
            let status = response.header.statusCode
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            if(status == 200){
               alert("Your request has been submited!");
            }else{
               
            }
            
        }).catch((error) =>{
            console.log(error);
        })
      } 

        renderRow(rowData){
            return(
                <View style={styles.itemStyle}>
                    <View style={styles.imageStyle}>
                      <Text style={{marginTop:5, fontSize:17}}>{rowData.type}</Text>
                      <TouchableOpacity onPress={()=>this.deleteItem(rowData)}>
                        <Image style={{width:40,height:40}} source={require('../images/delete.jpg')} />
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




    });