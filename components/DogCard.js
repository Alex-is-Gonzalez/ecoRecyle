import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function DogCard({ imageSource, description }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageContainer} source={imageSource} />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    color: "white",
    padding: 10,
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flexShrink: 1,
  },
  text: {
    color: "white",
    flexWrap: "wrap",
  },
});
