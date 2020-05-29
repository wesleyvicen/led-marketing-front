import React from 'react';
import { Carousel } from 'react-bootstrap';

function Anuncio(props) {
  const { anuncio } = props;

  return (
    <div className={'ad'}>
      <Carousel fade={true} controls={false} interval={1000} indicators={false}>
        {anuncio.map((anuncios, key) => (
          <Carousel.Item key={key}>
            <img
              className="d-block w-100 anuncio"
              src={anuncios.urlImage}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default Anuncio;
