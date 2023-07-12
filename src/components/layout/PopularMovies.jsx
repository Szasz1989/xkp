import axios from 'axios';
import config from '../../config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}`
        );
        setPopularMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  if (!loading) {
    return (
      <div>
        <h2>Popular Movies</h2>
        <ul>
          {popularMovies.map((movie) => (
            <Link to={`movie-details.html?id=${movie.id}`}>
              <li key={movie.id}>{movie.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default PopularMovies;
