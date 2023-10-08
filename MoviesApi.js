const base_url = "https://api.themoviedb.org/3/";
const api_key = "8469ac672f831e23dd56ae005e317c9e";
const auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDY5YWM2NzJmODMxZTIzZGQ1NmFlMDA1ZTMxN2M5ZSIsInN1YiI6IjYzOGQ1MTFiOGQ3N2M0MDA5ODlhOTAxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZoogFaW8hp3TTfxJ2p7zEM2S_cWfsQaky00X9BXpoo";


const fetch = require('node-fetch');

const fetchPopularMovies = async () => {

    const url = `${base_url}movie/popular?api_key=${api_key}`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${auth_token}`
        }
      };

    try{
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching popular movies ");
        }      
    }
    catch(error){
        console.log("Error in fetching popular movies ", error);
    }

}

const fetchNowPlayingMovies = async () => {
    const url = `${base_url}/movie/now_playing?api_key=${api_key}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${auth_token}`,
        }
    }

    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching Now Playing movies ");
        }      
    } catch (error) {
        console.error('Error in fetching Now Playing movies', error);
    }
}

const fetchTopRatedMovies = async () => {
    const url = `${base_url}/movie/top_rated?api_key=${api_key}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${auth_token}`,
        }
    }

    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching Top Rated movies ");
        }      
    } catch (error) {
        console.error('Error in fetching Top Rated movies', error);
    }
}

const fetchUpcomingMovies = async () => {
    const url = `${base_url}/movie/upcoming?api_key=${api_key}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${auth_token}`,
        }
    }

    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching Upcoming movies ");
        }      
    } catch (error) {
        console.error('Error in fetching Upcoming movies', error);
    }
}

const fetchOnTheAirTVShows = async () => {
    const url = `${base_url}/tv/on_the_air?api_key=${api_key}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${auth_token}`,
      },
    };
  
    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching On the air TV shows");
        }      
    } catch (error) {
      console.error('Error in fetching on the air TV shows', error);
    }
};

const fetchAiringTodayTVShows = async () => {
    const url = `${base_url}/tv/airing_today?api_key=${api_key}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${auth_token}`,
      },
    };
  
    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching airing todat TV shows ");
        }      
    } catch (error) {
      console.error('Error in fetching airing today TV shows', error);
    }
};
  
const fetchTopRatedTVShows = async () => {
    const url = `${base_url}/tv/top_rated?api_key=${api_key}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${auth_token}`,
      },
    };
  
    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching top rated TV shows ");
        }      
    } catch (error) {
      console.error('Error in fetching top rated TV shows', error);
    }
};

const fetchPopularTVShows = async () => {
    const url = `${base_url}/tv/popular?api_key=${api_key}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${auth_token}`,
      },
    };
  
    try {
        const res = await fetch(url,options);
        if(res.ok){
            const data = await res.json();
        return data.results;
        }
        else{
            console.log("Error in fetching popular TV shows ");
        }      
    } catch (error) {
      console.error('Error in fetching popular TV shows', error);
    }
};

const fetchTVShowSearchResults = async (query) => {
    const url = `${base_url}/search/tv?api_key=${api_key}&query=${encodeURIComponent(query)}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${auth_token}`,
      },
    };
  
    try {
      const res = await fetch(url,options);
      if(res.ok){
          const data = await res.json();
      return data.results;
      }
      else{
          console.log("Error in searchinf for TV shows ");
      }      
    } catch (error) {
      console.error('Error in searching for TV shows', error);
    }
  };

const fetchMovieSearchResults = async (query) => {
  const url = `${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${auth_token}`,
    },
    
  };

  try {
    const res = await fetch(url,options);
    if(res.ok){
        const data = await res.json();
    return data.results;
    }
    else{
        console.log("Error in  sraching for movies ");
    }      
  } catch (error) {
    console.error('Error in searching for movies', error);
  }
};

const fetchMultiSearchResults = async (query) => {
  const url = `${base_url}/search/multi?api_key=${api_key}&query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${auth_token}`,
    },
  };

  try {
    const res = await fetch(url,options);
    if(res.ok){
        const data = await res.json();
    return data.results;
    }
    else{
        console.log("Error in performing multi search ");
    }      
  } catch (error) {
    console.error('Error in performing multi search', error);
  }
};

module.exports = { fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpcomingMovies,
    fetchOnTheAirTVShows, fetchAiringTodayTVShows, fetchTopRatedTVShows, fetchPopularTVShows,
    fetchTVShowSearchResults, fetchMovieSearchResults, fetchMultiSearchResults }