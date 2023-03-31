import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import axios from "axios";

const NewsScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a3308c949d34cd682d926a7465a1e75"
      );
      setNews(response.data.articles);
      console.log(response.data.articles);
    };
    fetchNews();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {news.map((article) => (
        <View key={article.url} style={styles.article}>
          <Image source={{ uri: article.urlToImage }} style={styles.image} />
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.description}>{article.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  article: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 5,
  },
  image: {
    height: 200,
    resizeMode: "cover",
    width: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  description: {
    fontSize: 16,
    padding: 10,
  },
});

export default NewsScreen;
