import React, { useState, useEffect } from 'react';
import { api, apiNoticia } from '../services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

import Anuncio from '../components/anuncio';
import Data from '../components/data';
import Logo from '../components/logo';
import Noticia from '../components/noticia';
import Imagem from '../components/imagemNoticia';

function Main() {
  const [anuncios, setAnuncios] = useState([]);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function loadAnuncios() {
      const response = await api.get('/news/lists');
      setAnuncios(response.data);
    }
    loadAnuncios();
  }, []);

  useEffect(() => {
    async function loadNoticias() {
      const response = await apiNoticia.get(
        'top-headlines?country=br&apiKey=9dc6a5ed9f0a4df49d2a23fc8d47fa89'
      );
      setNoticias(response.data.articles);
    }
    loadNoticias();
  }, []);

  return (
    <div className="container2">
      <div className={'left'}>
        <Anuncio anuncio={anuncios} />
        <Noticia noticia={noticias} />
      </div>
      <div className={'right'}>
        <Logo />
        <Data />
        <Imagem noticia={noticias} />
      </div>
    </div>
  );
}

export default Main;
