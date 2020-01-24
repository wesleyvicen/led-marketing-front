import React, { useState, useEffect } from 'react';
import api from './services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

import Anuncio from './components/anuncio';
import Data from './components/data';
import Logo from './components/logo';
import Noticia from './components/noticia';
import Imagem from './components/imagemNoticia';

function App() {
	const [ anuncios, setAnuncios ] = useState([]);

	useEffect(() => {
		async function loadAnuncios() {
			const response = await api.get('/anuncio');
			setAnuncios(response.data);
		}
		loadAnuncios();
	}, []);

	return (
		<div className="container2">
			<div className={'left'}>
				{console.log(anuncios)}
				<Anuncio anuncio={anuncios} />
				<Noticia />
			</div>
			<div className={'right'}>
				<Logo />
				<Data />
				<Imagem />
			</div>
		</div>
	);
}

export default App;
