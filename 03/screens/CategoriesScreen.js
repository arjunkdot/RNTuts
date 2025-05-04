import React from "react";
import { CATEGORIES } from "@/data/dummy-data";
import { FlatList, Text, View } from "react-native";
import CategoryGridTile from "@/components/CategoryGridTile";

const renderCategoryItem = ({ itemData, navigation }) => {
  const pressHandler = () => {
    navigation.navigate("Overview", { categoryId: itemData.item.id });
  };

  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        key="categories"
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderCategoryItem({ itemData, navigation })}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
