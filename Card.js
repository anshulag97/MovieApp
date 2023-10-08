import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';


const Card = ({ movie, onPressDetails }) => {

    const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.cardImage}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{movie ? (movie.title ? movie.title : movie.name) : "Not Available"}</Text>
        <Text style={styles.cardText}>Popularity: {movie.popularity}</Text>
        <Text style={styles.cardText}>Release Date: {movie.release_date}</Text>
        <TouchableOpacity
          style={styles.moreDetailsButton}
          onPress={() =>             
            onPressDetails(movie)
        }>
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Card;

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 10,
      shadowOpacity: 0.2
    },
    cardText: {
        fontSize: 16,
        paddingBottom: 8,
    },
    cardDetails: {
        flex: 1,
        marginLeft: 10,
    },
    cardImage: {
        width: 110,
        height: 130,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 4,

    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    moreDetailsButton: {
        backgroundColor: '#3195bd',
        alignItems: 'center',
        borderRadius: 4,
        textAlign: 'center',
        padding: 16,
    },
});
