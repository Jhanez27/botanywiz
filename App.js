// App.js
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Homescreen";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
const Stack = createNativeStackNavigator();

const onboardingData = [
  {
    title: "Welcome to VSU Plant Identifier",
    description:
      "Explore pesticidal and botanical plants found within the VSU campus.",
    image: require("./assets/image1.jpg"),
  },
  {
    title: "Identify Plant",
    description:
      "Snap or upload a photo of a plant to discover its name, uses.",
    image: require("./assets/image2.jpg"),
  },
];

const Onboarding = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      swiperRef.current.scrollBy(1);
    } else {
      navigation.replace("Home");
    }
  };

  return (
    <Swiper
      loop={false}
      showsPagination={true}
      ref={swiperRef}
      onIndexChanged={setCurrentIndex}>
      {onboardingData.map((item, index) => (
        <View style={styles.slide} key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Image source={item.image} style={styles.image} />
          <TouchableOpacity onPress={handleNext}>
            <LinearGradient
              colors={["#5B6842", "#626F47", "#6A7650"]}
              style={styles.gradientButton}>
              <Text style={styles.buttonText}>
                {index === onboardingData.length - 1 ? "Finish" : "Next"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ))}
    </Swiper>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  image: {
    width: width * 0.7,
    height: height * 0.4,
    resizeMode: "contain",
    marginBottom: 20,
  },

  gradientButton: {
    borderRadius: 15,
    padding: 15,
    width: 140,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
