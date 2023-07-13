import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import config from '../../config';
import { Link } from 'react-router-dom';
import missingImage from '../layout/assets/missing-image.png';

function MovieSlider() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.apiKey}`
        );
        setNowPlayingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  const swiperParams = {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    navigation: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 1.5,
      },
      700: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3.5,
      },
    },
  };

  const firstMovieBackdropPath =
    nowPlayingMovies.length > 0 ? nowPlayingMovies[0].backdrop_path : '';

  return (
    <div className="relative">
      <h2 className="title">Now Playing</h2>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${firstMovieBackdropPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-screen h-screen z-0 left-0 top-0 opacity-10 fixed"
      ></div>
      <Swiper {...swiperParams}>
        {nowPlayingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            {/* <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            /> */}
            <Link
              to={`/details/${movie.id}?${
                movie.media_type ? movie.media_type : 'movie'
              }`}
              className="flex flex-col items-center justify-between"
            >
              <div>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Movie Poster"
                  />
                ) : (
                  <img src={missingImage} alt="Movie Poster" />
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieSlider;
