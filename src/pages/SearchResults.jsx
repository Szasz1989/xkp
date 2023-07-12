import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../components/layout/Search';
import config from '../config';
import axios from 'axios';
import Movie from '../components/movies/Movie';

function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${config.apiKey}&query=${query}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <>
      <Search />
      <h2 className="title">Search Results</h2>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:gap-8">
        {searchResults.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default SearchResults;
