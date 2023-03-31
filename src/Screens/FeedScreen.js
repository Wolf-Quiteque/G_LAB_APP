import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Searchbar,
  Card,
  IconButton,
  Paragraph,
  Avatar,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FeedScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title="John Doe"
            subtitle="2 hours ago"
            left={(props) => (
              <Avatar.Image
                {...props}
                source={{
                  uri: "https://randomuser.me/api/portraits/women/75.jpg",
                }}
                uri
              />
            )}
          />
          <Card.Content>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend, velit at convallis volutpat, velit quam congue nunc, sit
              amet ultricies turpis nunc in sapien.
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700/500" }} />
          <Card.Actions>
            <IconButton
              icon="thumb-up-outline"
              onPress={() => console.log("Pressed")}
            />
            {/* <IconButton
              icon="comment-outline"
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="share-outline"
              onPress={() => console.log("Pressed")}
            /> */}
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Title
            title="Jane Smith"
            subtitle="1 day ago"
            left={(props) => (
              <Avatar.Image
                {...props}
                source={{
                  uri: "https://randomuser.me/api/portraits/men/75.jpg",
                }}
              />
            )}
          />
          <Card.Content>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend, velit at convallis volutpat, velit quam congue nunc, sit
              amet ultricies turpis nunc in sapien.
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700/500" }} />
          <Card.Actions>
            <IconButton
              icon="thumb-up-outline"
              onPress={() => console.log("Pressed")}
            />
            {/* <IconButton
              icon="comment-outline"
              onPress={() => console.log("Pressed")}
            />
            <IconButton
              icon="share-outline"
              onPress={() => console.log("Pressed")}
            /> */}
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default FeedScreen;
