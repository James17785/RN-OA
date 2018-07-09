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
        this.state = {
            staffID:'',
            name:'',
            project:'',
            phone:'',
            email:'',
            rmEmail:'',
            navigate : this.props.navigation
        }
    }

    componentDidMount(){
        fetch('http://localhost:8081/public/dummy/ot_resp.json')
        .then((respon) =>respon.json())
        .then((response) => {
            console.log("get data ===",response);
            let status = response.header.statusCode
            if(status == 200){
                this.setState({
                    staffID:response.body.staffID,
                    name:response.body.name,
                    project:response.body.project,
                    phone:response.body.phone,
                    email:response.body.email,
                    rmEmail:response.body.rmEmail
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
                <Text style={styles.itemText}>Staff ID:</Text>
                <Text style={styles.itemText}>{this.state.staffID}</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>English Name:</Text>
                <Text style={styles.itemText}>{this.state.name}</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemText}>Email Address:</Text>
                <Text style={styles.itemText}>{this.state.email}</Text>
            </View>    
            <View style={styles.items}>
                <Text style={styles.itemText}>RM Email:</Text>
                <Text style={styles.itemText}>{this.state.rmEmail}</Text>
            </View> 
            <View style={styles.items}>
                <Text style={styles.itemText}>Project:</Text>
                <Text style={styles.itemText}>{this.state.project}</Text>
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
      }
    });