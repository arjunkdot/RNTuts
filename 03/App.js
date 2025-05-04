import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "@/screens/CategoriesScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import MealDetailScreen from "@/screens/MealDetailScreen";
import { Button, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#1e0b3d" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#301161",
            },
          }}>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="Overview" component={MealsOverviewScreen} />
          <Stack.Screen name="Detail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
