import MovieListing from '../components/movies/MovieListing';
import Search from '../components/layout/Search';

function Movies() {
  return (
    <>
      <Search />
      <h2 className="title">Popular Movies</h2>
      <MovieListing movieType="movie/popular" />
    </>
  );
}

export default Movies;
