import React, { Components } from "react";

import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

// import Contact from './Contact';
import Screen from "./Screen";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text1} numberOfLines={1}>
          SaladBar
        </Text>
      </View>
      <View style={[styles.head, styles.boxShadow]}>
        <Ionicons name="ios-search-outline" size={30} color="black" />
        <Text style={styles.text}>Search</Text>
      </View>

      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },

  heading: {
    backgroundColor: "white",

    justifyContent: "left",
    alignItems: "left",
    marginBottom: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
  },

  head: {
    marginBottom: 30,
    flexDirection: "row",
    width: "88%",
    justifyContent: "flex-start",
    marginRight: 45,
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    backgroundColor: "orange",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 35,
    color: "black",
  },

  boxShadow: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        // shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        // shadowRadius: 2.84,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});
