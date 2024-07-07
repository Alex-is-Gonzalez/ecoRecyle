import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import DogCard from "./components/DogCard";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Dogs in my life</Text>
      </View>
      <View style={styles.cardsContainer}>
        <DogCard
          imageSource={require("./assets/Eames1.jpeg")}
          description="This is Eames. He is living his best NY life."
        />
        <DogCard
          imageSource={require("./assets/Benito.png")}
          description="This is Benito. He is 7 month old standard."
        />
        <DogCard
          imageSource={require("./assets/Kuma.png")}
          description="This is Kuma. He is overally sassy."
        />
        <DogCard
          imageSource={require("./assets/Koda.png")}
          description="This is Koda. He is the youngest one only 3 months"
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>The Gallery</Text>
      </View>
      <Gallery />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  cardsContainer: {
    width: "100%",
    // alignItems: "center",
  },
});

{
  /* <SafeAreaView style={styles.container}>
<View>
  <Text style={{ color: "white" }}> Dogs in my Life </Text>
  <View style={styles.imageContainer}>
    <ImageViewer
      placeholderImageSource={PlaceholderImage}
      selectedImage={selectedImage}
    />
  </View>
  <View style={styles.footerContainer}>
    <Button
      theme="primary"
      label="Choose a photo"
      onPress={pickImageAsync}
    />
    <Button label="Use this photo" />
  </View>
  <StatusBar style="auto" />
</View>
</SafeAreaView> */
}
