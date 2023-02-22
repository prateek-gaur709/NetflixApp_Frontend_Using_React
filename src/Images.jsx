import React from 'react';

function Images(props) {
  return (
    <img
      src={props.src}
      alt='movie_pic'
      className='card__img'
      width='100%'
      height='1005'
    />
  );
}

export default Images;
