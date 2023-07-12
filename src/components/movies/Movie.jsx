import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ movie: { id, title, release_date, poster_path } }) {
  return (
    <Link to={`/${id}`} className="flex flex-col items-center justify-between">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Movie Poster"
        />

        <h5 className="text-center text-lg mt-2 mb-2 leading-6 md:text-2xl px-2">
          {title}
        </h5>
      </div>

      <p className="text-center text-mainColor">Release: {release_date}</p>
    </Link>
  );
}

Movie.protoTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
