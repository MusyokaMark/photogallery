import React from 'react';

const Search = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center md:justify-start ml-9 mt-4">
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        onChange={handleSearch}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        // onClick={() => onSearch('')} // Clear search
        className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
      >
        Clear
      </button>
    </div>
  );
};

export default Search;
