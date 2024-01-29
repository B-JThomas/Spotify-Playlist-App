import './App.css';
import React, {useState} from 'react';

import Playlist from './Playlist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Track from './Track';
import Tracklist from './Tracklist';


function App() {
  const [searchValue, setSearchValue] = useState('');
  function handleSearch(searchTerm) {
    setSearchValue(searchTerm);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <SearchResults searchValue={searchValue} /> 
      <Playlist /> 
      <Track />
      <Tracklist />
    </div>
  );
}

export default App;
