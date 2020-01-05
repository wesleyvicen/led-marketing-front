/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Anuncio extends Component {
	render() {
		const images = [
			{
				item: 'https://picsum.photos/id/1020/1000/600/',
				Legend: 'Legenda 1'
			},
			{
				item: 'https://picsum.photos/id/1015/1000/600/',
				thumbnail: 'Legenda 2'
			},
			{
				item: 'https://picsum.photos/id/1019/1000/600/',
				thumbnail: 'Legenda 3'
			}
		];

		return (
			<div className={'ad'}>
				<Carousel
					autoPlay
					interval="3000"
					showThumbs={false}
					infiniteLoop={true}
					showArrows={false}
					showStatus={false}
					showIndicators={false}
				>
					{images.map((item) => (
						<div>
							<img src={item.item} />
							<p className="legend">{item.thumbnail}</p>
						</div>
					))}
				</Carousel>
			</div>
		);
	}
}

export default Anuncio;
