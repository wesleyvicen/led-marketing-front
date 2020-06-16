import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Link } from 'react-router-dom';

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
    async function load() {
      const responseAd = await api.get('/ad/lists');
      setAnuncios(responseAd.data);
      const responseNews = await api.get('/news/lists');
      setNoticias(responseNews.data);
    }
    load();
  }, []);

  return (
    <div className="container2">
      <div className={'left'}>
        <Link to={'/login'}>Login</Link>
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
