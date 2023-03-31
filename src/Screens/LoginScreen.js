import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import auth from "../api/auth";
import { setSignIn } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setloading] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    dispatch(
      setSignIn({
        email: email,
        isLoggedIn: true,
      })
    );

    // setloading(true);
    // Keyboard.dismiss();
    // const response = await auth({ email: email, senha: password });
    // if (response == "false") {
    //   alert("email ou senha incorreto");
    //   setloading(false);
    // } else {
    //   dispatch(
    //     setSignIn({
    //       email: email,
    //       isLoggedIn: true,
    //     })
    //   );
    // }
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const handleAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 70000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 500],
  });

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.cloudContainer, { transform: [{ translateX }] }]}
      >
        <MaterialCommunityIcons name="cloud" size={100} color="#FFF" />
        <MaterialCommunityIcons
          name="cloud"
          size={80}
          color="#FFF"
          style={{ marginLeft: 30, marginTop: -40 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={70}
          color="#FFF"
          style={{ marginLeft: 60 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={30}
          color="#FFF"
          style={{ marginLeft: -20, marginTop: -70 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={30}
          color="#FFF"
          style={{ marginLeft: -90, marginTop: -80 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={40}
          color="#FFF"
          style={{ marginLeft: -100, marginBottom: -70 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={70}
          color="#FFF"
          style={{ marginLeft: -300, marginTop: -70 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={70}
          color="#FFF"
          style={{ marginLeft: -140, marginBottom: -30 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={30}
          color="#FFF"
          style={{ marginLeft: -130 }}
        />

        <MaterialCommunityIcons
          name="cloud"
          size={100}
          color="#FFF"
          style={{ marginLeft: -110, marginTop: -120 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={30}
          color="#FFF"
          style={{ marginLeft: -130 }}
        />

        <MaterialCommunityIcons
          name="cloud"
          size={40}
          color="#FFF"
          style={{ marginLeft: -100, marginBottom: -40 }}
        />
        <MaterialCommunityIcons
          name="cloud"
          size={40}
          color="#FFF"
          style={{ marginLeft: -60, marginTop: -100 }}
        />
      </Animated.View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Avatar.Icon size={70} icon="lock" style={styles.icon} />
          <Text style={styles.title}>GLAB</Text>
        </View>
        <View
          style={[
            styles.inputContainer,
            { borderBottomColor: isFocused ? "#008d8a" : "#FFF" },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={isFocused ? "#008d8a" : "#FFF"}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            { borderBottomColor: isFocused ? "#008d8a" : "#FFF" },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="gray"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={isFocused ? "#008d8a" : "#FFF"}
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Esqueceu senha?</Text>
        </TouchableOpacity>

        {loading ? (
          <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient colors={["gray", "gray"]} style={styles.gradient}>
              <ActivityIndicator />
            </LinearGradient>
          </TouchableOpacity>
        ) : email.length > 0 && password.length > 0 ? (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleLogin}
          >
            <LinearGradient
              colors={["#008d8a", "#00716c"]}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled style={styles.buttonContainer}>
            <LinearGradient
              colors={["#4eb9bb", "#82cdcf"]}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
  },
  cloudContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  icon: {
    backgroundColor: "#008d8a",
    marginRight: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#008d8a",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: "black",
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  forgotPassword: {
    color: "#008d8a",
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  gradient: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
  },
  signupText: {
    fontSize: 16,
    color: "#444",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
