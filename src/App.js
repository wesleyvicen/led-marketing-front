import React, { Component } from 'react';
import './styles/style.css';
import axios from 'axios';

import Anuncio from './components/anuncio';
import Data from './components/data';
import Logo from './components/logo';
import Noticia from './components/noticia';
import Imagem from './components/imagemNoticia';

const api = axios.create({
	baseURL: 'http://localhost:3333'
});

class App extends Component {
	state = {
		anuncio: []
	};

	async componentDidMount() {
		const { data: anuncio } = await api.get('/anuncio');
		this.setState({ anuncio });
	}

	handlePostSave = async (e) => {
		e.preventDefault();

		const { data: anuncio } = await api.post('/anuncio', { content: this.state.newPostContent });
		this.setState({ anuncio: [ ...this.state.anuncio, anuncio ] });
	};

	handleDelete = async (id) => {
		await api.delete(`/anuncio/${id}`);
	};

	render() {
		return (
			<div className="container mt-5">
				<div className={'left'}>
					<Anuncio />
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
}

export default App;
