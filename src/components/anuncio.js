import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/style.css";

class Anuncio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  render() {
    return (
      <div className={"ad"}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Anuncio;
