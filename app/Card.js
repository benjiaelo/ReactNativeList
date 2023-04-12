import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

function Card({ name, type, image, location, age }) {
  return (
    <SafeAreaView style={styles.content}>
      <View style={[styles.container, styles.boxShadow]}>
        <Image source={image} style={styles.image} />

        <View style={styles.name}>
          <Text style={styles.text1} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            {type}
          </Text>
          {/* <Text style={styles.text} numberOfLines={1}>
            {age}{" "}
          </Text> */}
          <Text style={styles.text} numberOfLines={1}>
            <Ionicons name="location-outline" size={26} color="black" />{" "}
            {location}
          </Text>
        </View>

        {/* <View style={styles.icons}>
            <Ionicons name="phone-portrait-outline" size={20} color="#2291F2" />
            <Ionicons name="chatbox-ellipses-sharp" size={20} color="#2291F2" />
            <SimpleLineIcons name="options-vertical" size={20} color="#BFBFBF" />
            </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 200,
  },

  container: {
    flexDirection: "row",
    marginVertical: 20,
    // marginHorizontal : 50,
    position: "relative",
    backgroundColor: "#299617",
    width: "75%",
    height: "70%",
    justifyContent: "space-between",
    borderRadius: 10,
    // alignSelf : 'center',
  },

  image: {
    width: 160,
    height: 180,
    borderRadius: 10,
    alignItems: "center",
    //   borderColor : "#2291F2",
    //   borderWidth : 2.5,
    position: "absolute",
    bottom: 0,
    top: -20,
    right: 180,
  },

  name: {
    // borderColor : "#2291F2",
    //  borderWidth : 2.5,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "60%",
    marginLeft: 120,
    height: "100%",
    paddingHorizontal: 20,
    gap: 5,
    textAlign: "justify",
  },

  text: {
    fontSize: 16,
    alignItems: "flex-start",
    color: "white",
  },

  text1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },

  // icons:{
  //     flexDirection : 'row',
  //     gap : 10,
  //     flex:1,
  //     justifyContent : "center",
  //     alignItems: "center",
  // },

  boxShadow: {
    // backgroundColor: '#fff',
    // borderRadius: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
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

export default Card;
