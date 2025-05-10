import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ioniccons from "@expo/vector-icons/Ionicons";
import Layout from "./screens/layout/Layout";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: "#eee",
            elevation: 0,
            boxShadow: "none",
          },
          tabBarStyle: {
            height: 100,
            paddingTop: 15,
            boxShadow: "none",
            elevation: 0,
            borderColor: "#eee",
          },
        }}>
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ color }) => (
              <Ioniccons name="home" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ioniccons name="person" size={24} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
