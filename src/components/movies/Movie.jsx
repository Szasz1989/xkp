import { Link } from 'react-router-dom';
import missingImage from '../layout/assets/missing-image.png';

function Movie({
  movie: {
    id,
    title,
    release_date,
    poster_path,
    media_type,
    name,
    first_air_date,
  },
}) {
  return (
    <Link
      to={`/details/${id}?${media_type ? media_type : 'movie'}`}
      className="flex flex-col items-center justify-between"
    >
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Movie Poster"
          />
        ) : (
          <img src={missingImage} alt="Movie Poster" />
        )}

        <h5 className="text-center text-lg mt-2 mb-2 leading-6 md:text-2xl px-2">
          {title ? title : name}
        </h5>
      </div>

      <p className="text-center text-mainColor hidden md:block">
        {release_date
          ? `Release: ${release_date}`
          : `First aired: ${first_air_date}`}
      </p>
    </Link>
  );
}

export default Movie;
