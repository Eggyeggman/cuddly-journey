import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import createBottomTabNavigator libray -Challenge 1
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator()
export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
      //Add the code to move to the respective screen when tab is clicked-challenge 3
         <Tab.Screen name="transaction" component={TransactionScreen}/>
         <Tab.Screen name="search" component={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
