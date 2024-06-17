'use client';
import { useState } from 'react';
import { SearchManufacturer } from './';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          manufacturer={manufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
