import Carousel from 'react-bootstrap/Carousel';
import BookFinder from '../images/bookfinder_screenshot.png';
import Commerce from '../images/E-Commerce_Screenshot.png';
import Generator from '../images/Password_Generator_Image.png';
import Music from '../images/Weirdmusic_screenshot.png';

 function Project() {
  return (

    <div>

    <div className={'p-3 m-3'}>
        <h3 className={'p-3 m-3 text-center text-light'}>
         Projects
        </h3>
        <p className={'text-center text-light'}> Below are some of my projects that I have worked on. <br/> Both the link to the project itself and to Github are available!</p>
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BookFinder}
          alt="First slide"
        />
        <Carousel.Caption>
            <h3 class="text-dark">Book Search Engine</h3>
            <a className={'text-dark px-3'} href="https://github.com/Chrisld50/Book-Search-Engine" rel='noreferrer' target="_blank"> Github </a>
            <a className={'text-dark px-3'} href="https://bookfinder12.herokuapp.com/board" target="_blank" rel='noreferrer'> Live Link </a>
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
            <a className={'text-dark px-3'} href="https://github.com/Chrisld50/weirdmusic" rel='noreferrer' target="_blank"> Github </a>
            <a className={'text-dark px-3'} href="https://weirdmusic.herokuapp.com/" rel='noreferrer' target="_blank"> Live Link </a>
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
            <a className={'text-white px-3'} href="https://github.com/Chrisld50/E-commerce_BE" rel='noreferrer' target="_blank"> Github </a>
            <a className={'text-white px-3'} href="https://drive.google.com/file/d/1LLER8KhZoAFJOjPa7lVaxF6ANmf4EFna/view" rel='noreferrer' target="_blank"> Link to Video </a>
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
            <a className={'text-dark px-3'} href="https://github.com/Chrisld50/Password_Generator" rel='noreferrer' target="_blank"> Github </a>
            <a className={'text-dark px-3'} href="https://chrisld50.github.io/Password_Generator/" rel='noreferrer' target="_blank"> Live Link </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default Project 
