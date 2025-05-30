import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import List from "@/components/MealDetail/List";
import Subtitle from "@/components/MealDetail/Subtitle";
import MealDetails from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import IconButton from "@/components/IconButton";
import { BookmarksContext } from "../store/context/bookmarks-context";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const bookmarkedMealsCtx = useContext(BookmarksContext);
  const isMealBookmarked = bookmarkedMealsCtx.ids.includes(mealId);

  const headerRightButtonHandler = () => {
    if (isMealBookmarked) {
      bookmarkedMealsCtx.removeBookmark(mealId);
    } else {
      bookmarkedMealsCtx.addBookmark(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerRightButtonHandler}
            iconName={isMealBookmarked ? "bookmark" : "bookmark-outline"}
          />
        );
      },
      title: selectedMeal.title,
    });
  }, [navigation, isMealBookmarked]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
