import Carousel from 'react-bootstrap/Carousel';
import BookFinder from '../images/bookfinder_screenshot.png';
import Commerce from '../images/E-Commerce_Screenshot.png';
import Generator from '../images/Password_Generator_Image.png';
import Music from '../images/Weirdmusic_screenshot.png';

 function Project() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BookFinder}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="text-dark">Book Search Engine</h3>
        <a href="https://github.com/Chrisld50/Book-Search-Engine" rel='noreferrer' target="_blank"> Github </a>
        <a href="https://bookfinder12.herokuapp.com/board" target="_blank" rel='noreferrer'> Check it out! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Music}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 class='text-dark'>Weird Music</h3>
        <a href="https://github.com/Chrisld50/weirdmusic" rel='noreferrer' target="_blank"> Github </a>
      <a href="https://weirdmusic.herokuapp.com/" rel='noreferrer' target="_blank"> Check it out! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Commerce}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class='text-light'>E-Commerce</h3>
        <a href="https://github.com/Chrisld50/E-commerce_BE" rel='noreferrer' target="_blank"> Github </a>
      <a href="https://drive.google.com/file/d/1LLER8KhZoAFJOjPa7lVaxF6ANmf4EFna/view" rel='noreferrer' target="_blank"> Check it out! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Generator}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 class='text-dark'>Password Generator</h3>
        <a href="https://github.com/Chrisld50/Password_Generator" rel='noreferrer' target="_blank"> Github </a>
      <a href="https://chrisld50.github.io/Password_Generator/" rel='noreferrer' target="_blank"> Check it out! </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Project 
