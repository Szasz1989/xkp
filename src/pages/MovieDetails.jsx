import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${config.apiKey}`
        );

        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!loading) {
    const {
      title,
      poster_path,
      backdrop_path,
      vote_average,
      release_date,
      overview,
      genres,
      homepage,
      budget,
      revenue,
      runtime,
      status,
      production_companies,
    } = movieDetails;

    return (
      <div className="w-full">
        <Link
          to="/"
          className="px-5 py-3 rounded text-mainColor font-semibold border-mainColor border z-10 relative"
        >
          Back To Home
        </Link>
        <div className="w-full flex z-10 relative mt-16 items-center justify-start mb-12">
          <div className="mr-10 hidden md:block">
            <img
              className="max-w-sm"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="Poster"
            />
          </div>
          <div>
            <div className="text-white font-bold uppercase text-2xl text-left mb-3">
              {title}
            </div>
            <div className="flex items-center text-lg mb-3">
              <FaStar className="mr-2 text-mainColor " />{' '}
              {vote_average.toFixed(1)} / 10
            </div>
            <div className="text-mainColor mb-3">
              Release Date: {release_date}
            </div>
            <div className="mb-3">{overview}</div>
            <div className="mb-8">
              <div className="font-bold mb-1">Genres:</div>
              <ul>
                {genres.map((genre) => (
                  <li key={genre.name}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <Link
              to={homepage}
              className="px-5 py-3 rounded text-mainColor font-semibold border-mainColor border z-10 relative"
            >
              Visit Website
            </Link>
          </div>
        </div>
        <div className="w-full flex-col z-10 relative mt-4 items-center justify-start mb-16">
          <div className="text-mainColor font-semibold uppercase text-xl text-left mb-4 tracking-wide">
            Details
          </div>
          <div className="space-y-2">
            <div>
              <span className="text-mainColor font-semibold pr-2">Budget:</span>
              <span>${budget}</span>
            </div>
            <div>
              <span className="text-mainColor font-semibold pr-2">
                Revenue:
              </span>
              <span>${revenue}</span>
            </div>
            <div>
              <span className="text-mainColor font-semibold pr-2">
                Runtime:
              </span>
              <span>{runtime} minutes</span>
            </div>
            <div>
              <span className="text-mainColor font-semibold pr-2">Status:</span>
              <span>{status}</span>
            </div>
            <div>
              <div className="text-white font-semibold pr-2 mt-4 mb-1">
                Production Companies:
              </div>
              <div className="text-mainColor">
                {production_companies
                  .map((company) => `${company.name} `)
                  .join(', ')}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-screen h-screen absolute z-0 left-0 top-0 opacity-10"
        ></div>
      </div>
    );
  } else if (!movieDetails) {
    return <div className="">No Details</div>;
  } else {
    return <Spinner />;
  }
}

export default MovieDetails;
