import axios from 'axios';
import config from '../../config';
import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import PropTypes from 'prop-types';

function MovieListing({ movieType }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${movieType}?api_key=${config.apiKey}`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:gap-8 z-20 relative">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

MovieListing.protoTypes = {
  movieType: PropTypes.string.isRequired,
};

export default MovieListing;
