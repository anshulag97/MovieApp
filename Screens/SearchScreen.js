import React, { useState, } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Dropdown from '../DropDown';
import Card from '../Card';
import { fetchTVShowSearchResults, fetchMovieSearchResults, fetchMultiSearchResults } from '../MoviesApi';


const SearchScreen = () => {
    const navigation = useNavigation();
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState([]);
    const [type, setType] = useState('movie');
  
    const searchMethod = async () => {
      if (query.trim() === '') {
        setSearch([]);
        return;
      }
  
        let results = [];
  
      try {
        if (type.value === 'tv') {
            results = await fetchTVShowSearchResults(query);
        }
         else if (type.value === 'movie') {
            results = await fetchMovieSearchResults(query);
          }
         else if (type.value === 'multi') {
          results = await fetchMultiSearchResults(query);
        }
        setSearch(results);
        
      } catch (error) {
        console.error('Error performing search', error);
        setSearch([]);
      }
    };
  
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Search</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Input"
            onChangeText={(text) => setQuery(text)}
            value={query}
          />
          <Dropdown
            data={[
              { label: 'TV Shows', value: 'tv' },
              { label: 'Movies', value: 'movie' },
              { label: 'Multi-search', value: 'multi' },
            ]}
            onChange={(value) => setType(value)}
          />
          <Button style={styles.button} title="Search" onPress={searchMethod} />
            <FlatList
              data={search}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Card
                  movie={item}
                  onPressDetails={(selectedItem) => {
                    navigation.navigate('MoreDetailsScreen', { movie: selectedItem, tvShow: null });
                  }}
                />
              )}
            />
          
        </View>
      );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf:'center',
      marginBottom: 16,
    },
    button: {
        backgroundColor: '#3195bd',
      },
    input: {
    marginBottom:15,
      height: 45,
      width:"80%",
      alignSelf:'center',
      borderWidth: 0.8,
      paddingHorizontal: 20,
    },
  });