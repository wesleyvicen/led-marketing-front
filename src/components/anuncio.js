import React from "react";
import "../styles/style.css";
import ImageGallery from "react-image-gallery";

class Anuncio extends React.Component {
  render() {
    const images = [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
      }
    ];
    return (
      <div className={"ad"}>
        <ImageGallery
          slideInterval={parseInt(2000)}
          slideDuration={300}
          items={images}
          showNav={false}
          showIndex={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay
        />
      </div>
    );
  }
}

export default Anuncio;
