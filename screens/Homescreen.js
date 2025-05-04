import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const plants = [
  {
    id: "1",
    name: "Buddha Belly",
    image: require("../assets/budhhabelly.png"),
    description:
      "A succulent plant known for its swollen base. It is used in traditional medicine and as a natural pesticide due to its ability to repel insects with its strong odor.",
  },
  {
    id: "2",
    name: "Coleus",
    image: require("../assets/coleus.png"),
    description:
      "Coleus is a versatile ornamental plant with vibrant foliage. It contains compounds that act as natural insect repellents and can be used in organic pest control.",
  },
  {
    id: "3",
    name: "Oregano",
    image: require("../assets/origano.jpg"),
    description:
      "Oregano is a culinary herb rich in antioxidants and antimicrobial properties. It has been used in traditional medicine and as a botanical pesticide to control pests like aphids.",
  },
  {
    id: "4",
    name: "Cassava",
    image: require("../assets/cassava.png"),
    description:
      "Cassava is a staple root crop with high starch content. Its leaves contain cyanogenic compounds, which can be toxic to pests, and are sometimes used in natural pest control strategies.",
  },
  {
    id: "5",
    name: "Insulin",
    image: require("../assets/insulin.png"),
    description:
      "Insulin is a hormone critical for regulating blood sugar. While not a plant itself, it can be derived from certain plants like the 'insulin plant,' which is believed to have therapeutic effects on diabetes and some pests.",
  },
];

const HomeScreen = () => {
  const handleIdentifyPress = () => {
    alert("Identify Plant feature coming soon!");
  };

  const renderPlantItem = ({ item }) => (
    <View style={styles.plantCard}>
      <Image source={item.image} style={styles.plantImage} />
      <Text style={styles.plantName}>{item.name}</Text>
      <Text style={styles.plantDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <View style={styles.appBarContent}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.cameraIcon}
          />
          <Text style={styles.appTitle}>Botanywiz</Text>
        </View>
      </View>

      {/* Identify Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleIdentifyPress}>
          <LinearGradient
            colors={["#5B6842", "#626F47", "#6A7650"]}
            style={styles.gradientButton}>
            <Text style={styles.buttonText}>Identify Plant</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Plant List */}
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={renderPlantItem}
        contentContainerStyle={styles.plantList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appBar: {
    height: 120,
    backgroundColor: "#657C6A",
    justifyContent: "center",
  },
  appBarContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: 60,
    height: 60,
  },
  appTitle: {
    marginLeft: 3,
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textShadowColor: "#2e3d2e", // Dark greenish-gray shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  gradientButton: {
    borderRadius: 15,
    padding: 15,
    width: 280,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  plantList: {
    paddingHorizontal: 20,
  },
  plantCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  plantImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  plantName: {
    fontSize: 16,
    color: "#444",
    fontWeight: "500",
  },
  plantDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});

export default HomeScreen;
