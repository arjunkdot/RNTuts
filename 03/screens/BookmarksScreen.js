import { MEALS } from "@/data/dummy-data";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MealsList from "@/components/MealsList/MealsList";

const BookmarksScreen = () => {
  const bookmarkedItemsCtx = useContext(BookmarksContext);

  const bookmarkedMeals = MEALS?.filter((meal) =>
    bookmarkedItemsCtx.ids.includes(meal.id)
  );
  console.log("BOOKMARKED MEALS", bookmarkedMeals);
  return bookmarkedMeals?.length > 0 ? (
    <MealsList items={bookmarkedMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Ionicons name="bookmark-outline" size={48} color="#e4d0ff" />
      <Text style={styles.text}>No bookmarks yet</Text>
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 24,
  },
});
