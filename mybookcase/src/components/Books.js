import React from 'react';
 const Book = (props) => {
     return (
           <div>
             <h1>{props.book.volumeInfo.title}</h1>
             <h2>{props.book.volumeInfo.authors}</h2>
</div> );
}
export default Book;