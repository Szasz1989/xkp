import MovieListing from '../components/movies/MovieListing';
import Search from '../components/layout/Search';

function Series() {
  return (
    <>
      <Search />
      <h2 className="title">Popular Series</h2>
      <MovieListing movieType="tv/popular" />
    </>
  );
}

export default Series;
