import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const Post = ({ user, content, image, likes, comments }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <Text style={styles.username}>{user.name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{content}</Text>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.actions}>
        <IconButton icon="thumb-up-outline" size={24} />
        <Text style={styles.likes}>{likes} likes</Text>
        <IconButton icon="comment-outline" size={24} />
        <Text style={styles.comments}>{comments} comments</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {},
  text: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    marginLeft: 4,
    marginRight: 16,
    fontSize: 14,
  },
  comments: {
    fontSize: 14,
  },
});

export default Post;
