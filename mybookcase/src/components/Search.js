import React, { useState } from 'react';

const Search = () => {
    const[keyword, setKeyword] = useState('');
    return (
        <form>
            <h1>Search</h1>
            <input 
            type="text"
            value= {keyword} 
            onChange={ (event) => {setKeyword(event.target.value);}}/>
            <button>Submit</button>
        </form>
    );
};

export default Search;