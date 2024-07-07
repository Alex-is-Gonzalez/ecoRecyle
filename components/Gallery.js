import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Gallery() {
  return (
    <View style={styles.dogContainer}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://placedog.net/640/480?r",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dogContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
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
