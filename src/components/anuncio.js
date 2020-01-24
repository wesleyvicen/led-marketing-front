import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Anuncio(props) {
	const { anuncio } = props;
	return (
		<div className={'ad'}>
			<Carousel
				autoPlay
				interval="300"
				showThumbs={false}
				infiniteLoop={true}
				showArrows={true}
				showStatus={false}
				showIndicators={false}
			>
				{anuncio.map((anuncios) => (
					<div key={anuncios.id}>
						<img src={anuncios.urlImage} alt={'anuncio'} />
						<p className="legend">{anuncios.localizacao}</p>
					</div>
				))}
			</Carousel>
		</div>
	);
}
export default Anuncio;
