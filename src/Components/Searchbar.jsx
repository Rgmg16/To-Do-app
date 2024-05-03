import React, { useState } from 'react';

const SearchBar = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={handleChange}
      className='border-2 rounded-lg border-yellow-500'
    />
  );
};

export default SearchBar;
