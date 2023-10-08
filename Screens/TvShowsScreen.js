import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../Card';
import DropDown from '../DropDown';
import { fetchOnTheAirTVShows, fetchAiringTodayTVShows, fetchTopRatedTVShows, fetchPopularTVShows } from '../MoviesApi'; 


const TvShowsScreen = () => {
  const [category, setCategory] = useState('Popular');
  const categories = [
    { label: 'On the Air', value: 'On the Air' },
    { label: 'Airing Today', value: 'Airing Today' },
    { label: 'Top Rated', value: 'Top Rated' },
    { label: 'Popular', value: 'Popular' },
  ];
  
  const [tvShows, setTvShows] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        let getTvShows;
        switch (category) {
          case 'On the Air':
            getTvShows = await fetchOnTheAirTVShows();
            break;
          case 'Airing Today':
            getTvShows = await fetchAiringTodayTVShows();
            break;
          case 'Top Rated':
            getTvShows = await fetchTopRatedTVShows();
            break;
          case 'Popular':
            getTvShows = await fetchPopularTVShows();
            break;
          default:
            getTvShows = [];
            break;
        }
        setTvShows(getTvShows);
      } catch (error) {
        console.error('Error in fetching TV shows', error);
      }
    };
    fetchTvShows();
  }, [category]);

  const categoryChange = (newCategory) => {
    setCategory(newCategory.value);
  };

  return (
    <View style={styles.container}>
      <DropDown
        data={categories}
        category={category}
        onChange={categoryChange}
      />
      <FlatList
        data={tvShows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            movie={item}
            onPressDetails={(selectedShow) => {
              navigation.navigate('MoreDetailsScreen', { movie: null, tvShow: selectedShow });
            }}
          />
        )}
      />
    </View>
  );
};

export default TvShowsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  });