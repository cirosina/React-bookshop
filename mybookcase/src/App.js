import React, { useState } from 'react';
//import '../App.css';
import Book from './components/Books';
import data from './models/books.json';
import Search from './components/Search';

const App = (props) => {

  const [books] = useState(data);

  return (
      <div>
          {<Search/>}
          {books.map(book => <Book key={book.id} book={book}/>)}
      </div>
  );
}

export default App;

