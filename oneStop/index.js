// import { AppRegistry } from 'react-native';
// import App from './App';
// import FlexDirectionBasics from './App';
// import Apps from './js/card/navigator';

// AppRegistry.registerComponent('oaSystem',  ()=>Apps);

//AppRegistry.registerComponent('oaSystem'),() => FlexDirectionBasics);




import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  YellowBox,
  Image
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import MyInfo from './js/card/myPage';
import OTInfo from './js/card/otPage';
import LeaveInfo from './js/card/leavePage';
import Register from './js/card/register';


const MainScreentNavigator=TabNavigator({
    Main:{
        screen: StackNavigator({
           Home:{
               screen:MyInfo
           },
           regist:{
             screen: Register
           }
        },{
            navigationOptions:{
                headerTitle:'我的',
                title:'我的',
                headerStyle:{
                    backgroundColor:'#99f'
                }
            }
        }),//OTInfo,
        navigationOptions:{
            headerTitle: '我的',
            tabBarLabel: '我的',
            tabBarIcon:<View ><Image style={{width:30,height:30}} source={require('./js/images/me.png')} /></View>
        }
    }, 
    OT:{
        screen: StackNavigator({
            screen:OTInfo
        },{
            navigationOptions:{
                headerTitle:'挂失',
                title:'挂失',
                headerStyle:{
                    backgroundColor:'#99f'
                }
            }
        }),//OTInfo,
        navigationOptions:{
            headerTitle: '挂失',
            tabBarLabel: '挂失',
            tabBarIcon:<View ><Image style={{width:30,height:30}} source={require('./js/images/overTime.png')} /></View>
        }
    },
    leave:{
        screen: StackNavigator({
            screen:LeaveInfo
        },{
            navigationOptions:{
                headerTitle:'寻物启事',
                title:'寻物启事',
                headerStyle:{
                    backgroundColor:'#99f'
                }
            }
        }),//OTInfo,
        navigationOptions:{
            headerTitle: '寻物启事',
            tabBarLabel: '寻物启事',
            tabBarIcon:<View ><Image style={{width:30,height:30}} source={require('./js/images/leave.png')} /></View>
        }
    }
});
const  MyNavigatior = StackNavigator({
    Main:{
        screen: MainScreentNavigator
    },
    
    
},
{
    initialRouteName: 'Main',
    navigationOptions:{

        headerTitleAllowFontScaling:true,
        headerBackTitle:null,
        headerTintColor:'',
        headerBackground:'',
        headerStyle:{
            backgroundColor:'#99f'
        },
        header:null

    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','']);
AppRegistry.registerComponent('oaSystem', () => MainScreentNavigator);