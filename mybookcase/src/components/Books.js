import React from 'react';
 const Book = (props) => {
     return (
           <div>
             <h2>{props.book.volumeInfo.title}</h2>
             <h2>{props.book.volumeInfo.authors}</h2>
</div> );
}
export default Book;