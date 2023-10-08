import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MoreDetailsScreen = ({ route }) => {
  const { movie, tvShow } = route.params;
  const item = movie || tvShow;
  const title = item.title || item.name;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.desc}>{item.overview}</Text>
      <Text style={styles.popularity}>
        Popularity: {item.popularity} | Release Date: {item.release_date}
      </Text>
    </View>
    </ScrollView>
  );
};

export default MoreDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 45,
    alignItems: 'center'
  },
  popularity: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: 16,
    marginBottom:10
  },
  desc: {
    fontSize: 16,
    paddingBottom: 16,
    paddingTop: 30
  },
  title: {
    fontSize: 26,
    paddingTop:0,
    margin:0,
    paddingBottom: 30,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 350,
  },
});
