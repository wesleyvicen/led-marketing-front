import * as React from 'react';
import "../styles/style.css"

class Imagem extends React.PureComponent{

  render() {
    return(
      <div className={"image"}>
      <img src={'https://s2.glbimg.com/AWr593Fx5NnL3v40HLNGs-hIObA=/0x0:1280x661/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/A/5JX5IVTMqeaeXQAMPfJA/cedulas-falsas.jpeg'} alt="Minha Figura"/>
      </div>
    )
  }
}

export default Imagem;