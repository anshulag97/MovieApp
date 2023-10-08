import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import { fetchPopularMovies } from '../MoviesApi';
import { fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../MoviesApi';
import Card from '../Card';
import { useNavigation } from '@react-navigation/native';
import DropDown from '../DropDown';


const MoviesScreen = () => {
    const navigation = useNavigation();
    const [category, setCategory] = useState('Popular');
    const categories = [
        {label:'Popular' , value: 'Popular'},
        {label:'Now Playing' , value: 'Now Playing'},
        {label:'Top Rated' , value: 'Top Rated'},
        {label:'Upcoming' , value: 'Upcoming'}
    ];

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            let getMovies ;
        try {
            switch (category) {
                case 'Popular':
                    getMovies = await fetchPopularMovies();
                  break;
                case 'Now Playing':
                    getMovies = await fetchNowPlayingMovies();
                  break;
                case 'Top Rated':
                    getMovies = await fetchTopRatedMovies();
                  break;
                case 'Upcoming':
                    getMovies = await fetchUpcomingMovies();
                  break;
                default:
                    getMovies = [];
                  break;
              }
              setMovies(getMovies);
        } catch (error) {
            console.error('Error fetching movies', error);
        }
        };

        fetchMovies();
    }, [category]);

    const categoryChange = (newCategory) => {
        setCategory(newCategory.value);
    }

    return (
        <View style={styles.container}>
     <DropDown data={categories} category={category} onChange={categoryChange} />
     <FlatList data={movies} keyExtractor={(item) => item.id.toString()} renderItem={
        ({item})=>(
            <Card movie={item} onPressDetails={(selectedMovie) => { 
                navigation.navigate('MoreDetailsScreen', {movie: selectedMovie , tvShow:null});
            }}
            />
        )
     }/>
    </View>
    )   
}

export default MoviesScreen;

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