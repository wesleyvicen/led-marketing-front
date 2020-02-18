import React, { useState, useEffect } from "react";
import { api } from "../services/api";

import "../styles/sidebar.css";

function Cadastro() {
  const [urlImage, setUrlImage] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  async function handleAddAnuncio(e) {
    e.preventDefault();

    const response = await api.post("/anuncio", {
      urlImage,
      localizacao
    });
    setUrlImage("");
    setLocalizacao("");

    if (response) {
      alert("Cadastrado com sucesso");
    } else {
      alert("Erro generico");
    }
  }

  return (
    <div className="container2">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddAnuncio}>
          <div className={"input-block"}>
            <label htmlFor={"urlImage"}>URL da imagem</label>
            <input
              className={"urlImage"}
              id={"urlImage"}
              value={urlImage}
              onChange={e => setUrlImage(e.target.value)}
              required
            />
          </div>
          <div className={"input-block"}>
            <label htmlFor={"localizacao"}>Localização</label>
            <input
              className={"localizacao"}
              id={"localizacao"}
              value={localizacao}
              onChange={e => setLocalizacao(e.target.value)}
              required
            />
          </div>
          <button type={"submit"}>Salvar</button>
        </form>
      </aside>
    </div>
  );
}

export default Cadastro;
