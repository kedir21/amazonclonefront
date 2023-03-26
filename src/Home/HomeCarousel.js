import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import AmazonImage1 from './images/amazon-discover-our-beauty.jpg';
import AmazonImage2 from './images/amazon-newyear-newdeals_.jpg';
import AmazonImage3 from './images/amazon-refresh-your-space.jpg';
import AmazonImage4 from './images/amazon-ship-to-45-million.jpg';
import AmazonImage5 from './images/amazon-shop-toys&games.jpg';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AmazonImage1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AmazonImage2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AmazonImage3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AmazonImage4}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AmazonImage5}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselFade;