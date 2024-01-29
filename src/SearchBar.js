import React, { useEffect, useState } from "react";

function SearchBar({ onSearch }) {

    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(search);
        setSearch('');
    }
    function handleChange(e) {
        setSearch(e.target.value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id='search' type='text' value={search} name='search' onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
};

export default SearchBar;