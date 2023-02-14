import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import { COLORS, images } from "../constants";
import { Image, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  headerTitleAlign: "center",
  headerTitleStyle: { color: COLORS.white },
  headerTitle: () => (
    <Image source={images.logo} resizeMode="contain" style={styles.logo} />
  ),
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;

const styles = StyleSheet.create({
  logo: {
    width: 75,
    height: 50,
  },
});
