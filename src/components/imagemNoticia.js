import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/style.css';

function Imagem(props) {
  const { noticia } = props;
  return (
    <div className={'image'}>
      <Carousel fade={true} controls={false} interval={6000} indicators={false}>
        {noticia.map((noticias, key) => (
          <Carousel.Item key={key}>
            <img
              className="u-containProse"
              src={noticias.urlImage}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Imagem;
