import React, { useState } from 'react';
import { api } from '../services/api';

import '../styles/sidebar.css';

function Cadastro() {
  const [nameResp, setNameResp] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nincho, setNincho] = useState('');

  async function handleAddAnuncio(e) {
    e.preventDefault();

    const response = await api.post('/anuncio', {
      nameResp,
      urlImage,
      latitude,
      longitude,
      nincho,
    });
    setNameResp('');
    setUrlImage('');
    setLatitude('');
    setLongitude('');
    setNincho('');

    if (response) {
      alert('Cadastrado com sucesso');
    } else {
      alert('Erro generico');
    }
  }

  return (
    <div className="container2">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddAnuncio}>
          <div className={'input-block'}>
            <label htmlFor={'nameResp'}>Nome do Responsavel</label>
            <input
              className={'nameResp'}
              id={'nameResp'}
              value={nameResp}
              onChange={e => setNameResp(e.target.value)}
              required
            />
          </div>
          <div className={'input-block'}>
            <label htmlFor={'urlImage'}>URL da imagem</label>
            <input
              className={'urlImage'}
              id={'urlImage'}
              value={urlImage}
              onChange={e => setUrlImage(e.target.value)}
              required
            />
          </div>
          <div className={'input-block'}>
            <label htmlFor={'latitude'}>Latitude</label>
            <input
              className={'latitude'}
              id={'latitude'}
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required
            />
          </div>
          <div className={'input-block'}>
            <label htmlFor={'longitude'}>Longitude</label>
            <input
              className={'longitude'}
              id={'longitude'}
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required
            />
          </div>
          <div className={'input-block'}>
            <label htmlFor={'nincho'}>Nincho do anúncio</label>
            <select
              class="form-control"
              id={'nincho'}
              value={nincho}
              onChange={e => setNincho(e.target.value)}
            >
              <option />
              <option value={'games'}>Jogos</option>
              <option value={'food'}>Comida</option>
            </select>
          </div>
          <button type={'submit'}>Salvar</button>
        </form>
      </aside>
    </div>
  );
}

export default Cadastro;
