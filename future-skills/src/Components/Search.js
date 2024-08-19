import React, { useState } from 'react';

const Search=({ onSearch })=> {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="bg-purple-100 text-center py-12 w-full">
      <h1 className="text-3xl font-bold">How can we help?</h1>
      <div className="mt-4 flex justify-center">
        <input 
          type="text" 
          placeholder="Search" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-l w-80"
        />
        <button 
          onClick={handleSearch} 
          className="bg-gray-200 border border-gray-300 px-4 py-2 rounded-r">
          →
        </button>
      </div>
    </div>
  );
}

export default Search;
