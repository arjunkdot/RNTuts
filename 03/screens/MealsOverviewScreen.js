import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "@/data/dummy-data.js";
import MealsList from "@/components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (catetory) => categoryId === catetory.id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
