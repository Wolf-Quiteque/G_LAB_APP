import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Camera } from "expo-camera";

const MessageScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "hello!", sender: "other" },
    { id: 2, text: "How are yxou?", sender: "self" },
  ]);
  const [messageText, setMessageText] = useState("");
  const [cameraPermission, setCameraPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");
    })();
  }, []);

  const handleMessageSend = () => {
    if (messageText.length > 0) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: messageText, sender: "self" },
      ]);
      setMessageText("");
    }
  };

  const handleImageSelect = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleFileSelect = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*" });

    if (!result.cancelled) {
      // Handle file upload here
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messageContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.message,
              message.sender === "self"
                ? styles.selfMessage
                : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <IconButton
          icon={() => <Ionicons name="attach" size={24} color="black" />}
          onPress={handleFileSelect}
        />
        <IconButton
          icon={() => <Ionicons name="camera" size={24} color="black" />}
          onPress={() => navigation.navigate("Camera")}
          disabled={!cameraPermission}
        />
        <TextInput
          placeholder="Mensagem.."
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
          style={styles.input}
          right={<TextInput.Icon icon="send" onPress={handleMessageSend} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "2%",
    marginBottom: "5%",
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  selfMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#f1f0f0",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e2e2e2",
  },
});

export default MessageScreen;
