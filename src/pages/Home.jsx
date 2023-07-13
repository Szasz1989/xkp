import MovieListing from '../components/movies/MovieListing';
import Search from '../components/layout/Search';
import MovieSlider from '../components/movies/MovieSlider';

function Home() {
  return (
    <>
      <MovieSlider />
      <Search />
      <h2 className="title">Popular Movies</h2>
      <MovieListing movieType="movie/popular" />
    </>
  );
}

export default Home;
