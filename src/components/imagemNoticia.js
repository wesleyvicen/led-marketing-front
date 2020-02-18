import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/style.css";

function Imagem(props) {
  const { noticia } = props;
  return (
    <div className={"image"}>
      <Carousel
        fade={true}
        controls={false}
        interval={6000}
        pauseOnHover={false}
        indicators={false}
      >
        {noticia.map(noticias => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={noticias.urlToImage}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Imagem;
