import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar, Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Avatar.Image
            size={150}
            source={{ uri: "https://picsum.photos/200" }}
          />
          <Ionicons name="camera" size={32} style={styles.cameraIcon} />
        </TouchableOpacity>
        <View style={styles.userDetails}>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.followStats}>1 colaboradores</Text>
          <Text style={styles.descrip}>
            "O objetivo da vida é tornar-se a melhor versão de si mesmo." -
            Mahatma Gandhi.
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
        </View>
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/300" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  avatarContainer: {
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 4,
  },
  userDetails: {
    marginTop: 10,
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  followStats: {
    fontSize: 16,
    color: "black",
  },
  descrip: {
    fontSize: 16,
    color: "#666",
    width: 290,
    marginTop: 4,
    textAlign: "center",
  },
  imageContainer: {
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  image: {
    width: "32%",
    height: 100,
    borderRadius: 10,
  },
});

export default ProfileScreen;
