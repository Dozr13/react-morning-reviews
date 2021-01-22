import React from 'react';


function ListItem({movie}) {          //OOOOR destructure by calling your prop by name in the param
  //! const {movie} = props  
  //  ^^^^^^^^^^^    ^^^^^^^  Destructure movie so you can just write movie.title below instead of props.movie.title but you need props in the param in order to use
  return <div className='List-Item'>
    <img 
      alt={ movie.title } 
      className='movie-poster' 
      src={ movie.posterImg } />

    <div className='movie-info'>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  </div>
}

export default ListItem