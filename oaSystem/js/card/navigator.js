/**
 * Router
 */

 import React,{ Component } from 'react';
 import { 
     TouchableOpacity,
     Text,
     View
    } from 'react-native';
    import {
        StackNavigator,
        TabNavigator
    } from 'react-navigation'
//  import Icon from 'react-native-vector-icons/Ionicons';
//  import TabNavigator from 'react-native-tab-navigator';
 import MyInfo from './myPage';
 import OTInfo from './otPage';

 export const NavigatorRouter = StackNavigator({
    Main:{
        screen: MyInfo
    },
    ot: {
        screen: OTInfo,
        navigationOptions:null
    },
    // leave:{
    //     screen:LeaveInfo,
    //     navigationOptions:null
    // }
 });