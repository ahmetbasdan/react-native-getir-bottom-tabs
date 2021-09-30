import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, SIZES } from "../constants";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

import CampaignScreen from "../screens/CampaignScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const TAB_COUNT = 5;
const TAB_WIDTH = SIZES.width / TAB_COUNT;

const BottomNavigator = () => {
  const stickOffset = useSharedValue(0);
  const stickStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: stickOffset.value }],
    };
  });

  return (
    <View
      style={{
        height: 55,
        width: SIZES.width,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={[
          {
            height: 5,
            width: TAB_WIDTH * 0.8,
            backgroundColor: COLORS.primary,
            marginLeft: TAB_WIDTH * 0.1,
            borderTopRightRadius: SIZES.radius,
            borderTopLeftRadius: SIZES.radius,
            position: "absolute",
            bottom: 0,
            zIndex: 999,
          },
          stickStyle,
        ]}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 55,
            position: "absolute",
            top: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={icons.home} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              stickOffset.value = withSpring(0, {
                mass: 0.2,
                damping: 5,
              });
            },
          }}
        />
        <Tab.Screen
          name="searchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={icons.search} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              stickOffset.value = withSpring(TAB_WIDTH, {
                mass: 0.2,
                damping: 5,
              });
            },
          }}
        />
        <Tab.Screen
          name="actionScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60 / 2,
                  backgroundColor: COLORS.white,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: -35,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 6,
                    height: 6,
                  },
                  shadowOpacity: 0.37,
                  shadowRadius: 7.49,

                  elevation: 3,
                }}
              >
                <Image
                  source={icons.action}
                  style={{ width: 52, height: 22 }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="profilecreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={icons.profile} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              stickOffset.value = withSpring(TAB_WIDTH * 3, {
                mass: 0.2,
                damping: 5,
              });
            },
          }}
        />
        <Tab.Screen
          name="campaignScreen"
          component={CampaignScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon source={icons.campaign} focused={focused} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              stickOffset.value = withSpring(TAB_WIDTH * 4, {
                mass: 0.2,
                damping: 5,
              });
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavigator;

interface ITabBarIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}

const TabBarIcon: React.FC<ITabBarIconProps> = ({ source, focused }) => (
  <View>
    <Image
      style={{
        tintColor: focused == true ? COLORS.primary : COLORS.gray,
        width: 23,
        height: 23,
      }}
      source={source}
    />
  </View>
);
