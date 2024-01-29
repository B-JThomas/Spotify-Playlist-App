import React, { useEffect, useState } from "react";

function SearchResults({ searchValue }) {

    const songs =['song1','song2','song3','song4'];


    const [elements, setElements] = useState([])

    useEffect(() => {
        const newElements = songs.map((item, index) => (
          <li key={item} >
            <div>
              <p>{item}</p>
              <button>+</button>
            </div>
          </li>
        ));
    
        setElements(newElements);
      }, [searchValue]);

    return(
        <div>
            <h2>Results</h2>
            <p>Search Term: {searchValue}</p>
            <ul>
                {elements}
            </ul>
        </div>
    )
};

export default SearchResults;