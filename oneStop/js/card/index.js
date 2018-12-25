/**
 * The entry of the card authentication fucntion
 * Version: 0.1
 * Author: James
 */

 import React,{ Component } from 'react';
 import {
     Text,
     View,
     StyleSheet,
     Button
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';

 import { bold } from 'ansi-colors';

 const copys = {
     title:'Account activation self-service system',
     body:'You can activate your card with this app.Please make sure the card you want to activate is credit card, then click the following button what is most suitable operations that you expect and completes the entire journey.',
     button: 'DORMANT ACCOUNT ACTIVATION'
 };

 export default class Card extends Component {
     
     render () {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.containor}>
                <View> <Text style={styles.title}>{copys.title}</Text>
                <Text style={styles.body}>{copys.body}</Text></View>
                <View style={styles.button}>
                   <Button 
                      
                      title={copys.button}
                      color='white'
                      
                      
                    ></Button> 
                </View>                                
            </View>
        );
     }
 }
 class TermsAndCondition extends Component {
    render () {
       // const { navigate2 } = this.props.navigation;
       return (
           <View style={styles.containor}>
               <View> <Text style={styles.title}>{copys.title}</Text>
               <Text style={styles.body}>{copys.body}</Text></View>
               <View style={styles.button}>
                  <Button 
                     
                     title={copys.button}
                     color='white'
                     onPress={ goToNext }
                     
                   
                   ></Button> 
               </View>                                
           </View>
       );
    }
}

 goToNext = () => {
    
 }
 const Apps = StackNavigator({
     Main: {
         screen: Card,
         navigationOptions:null
     },
     Terms:{
         screen:TermsAndCondition,
         navigationOptions:null
     }
 });

 const styles = StyleSheet.create({
    containor:{
        flex: 1,
        flexDirection:'column',
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        justifyContent:'space-between'
    },
    title:{
        fontSize: 30
    },
    body:{
        marginTop:20,
        fontSize: 16
    },
    button:{
        backgroundColor: 'red',
        justifyContent:'flex-end',
        height:50,
        marginBottom:20,
        borderWidth:2,
        borderColor:'red'
    }
 });