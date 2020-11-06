import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const Search = () => {
    const[keyword, setKeyword] = useState('');
    return (
        <form>
            <h1>Search</h1>
            <input 
            type="text"
            value= {keyword} 
            onChange={ (event) => {setKeyword(event.target.value);}}/>
            <Button className="btn-danger">Submit</Button>
        </form>
    );
};

export default Search;