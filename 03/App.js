import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "@/screens/CategoriesScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import MealDetailScreen from "@/screens/MealDetailScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BookmarksContextProvider } from "./store/context/bookmarks-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions = {
  headerStyle: { backgroundColor: "#1e0b3d" },
  headerTintColor: "white",
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...screenOptions,
        drawerContentStyle: { backgroundColor: "#301161" },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4d0ff",
        sceneStyle: {
          backgroundColor: "#301161",
        },
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerLabel: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarked"
        component={BookmarksScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
  q;
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <BookmarksContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
              ...screenOptions,
              contentStyle: {
                backgroundColor: "#301161",
              },
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Overview" component={MealsOverviewScreen} />
            <Stack.Screen name="Detail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BookmarksContextProvider>
    </>
  );
}
