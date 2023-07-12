import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="m-auto bg-white text-black max-w-screen-sm rounded my-20">
      <form onSubmit={handleSearch} className="flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="rounded p-3 w-full outline-none"
        />
        <button type="submit" className="px-7">
          <FaSearch className="" />
        </button>
      </form>
    </div>
  );
}

export default Search;
