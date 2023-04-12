import React from "react";

import { FlatList, View, Text, StyleSheet } from "react-native";

// import Contact from './Contact';
import Card from "./Card";

export default function Page() {
  const pets = [
    {
      id: 1,
      name: "Cream Salad",
      type: "Breakfast",
      location: "Kasoa",
      image: require("../assets/salad6.jpg"),
    },
    {
      id: 2,
      name: "Spicy Salad",
      type: "Lunch",
      location: "East-Legon",
      image: require("../assets/salad5.jpg"),
    },
    {
      id: 3,
      name: "Onion Salad",
      type: "Supper",

      location: "Botwe",
      image: require("../assets/salad3.jpg"),
    },
    {
      id: 4,
      name: "Green Salad",
      type: "Appetizer",

      location: "Tema",
      image: require("../assets/salad4.jpg"),
    },
    {
      id: 5,
      name: "Fruit Salad",
      type: "Sweets",

      location: "Spintex",
      image: require("../assets/salad1.webp"),
    },
    {
      id: 6,
      name: "Bloit Salad",
      type: "Spice",

      location: "Circle",
      image: require("../assets/salad2.jpeg"),
    },
  ];

  const onePet = ({ item }) => {
    return (
      <Card
        name={item.name}
        type={item.type}
        image={item.image}
        location={item.location}
        age={item.age}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pets}
        renderItem={onePet}
        //
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    height: "100%",
    gap: 50,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});
