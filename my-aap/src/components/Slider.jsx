import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from'react-router-dom';
import {Button} from'react-bootstrap';

const Slider = () => {
  return (
    <Carousel variant="dark">
    <Carousel.Item>
      <img width={400} height={900}
        className="d-block w-100"
        src="./img/first.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <div className='text-slogan'>
        <h4>Высокий выбор музыкальных инструментов</h4>
        <h5>Заполните заявку на телефонный звонок прямо сейчас</h5>
        </div>
        <Link to={'/form'}>
        <Button variant='primary'>Заявка</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={400} height={900}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <div className='text-slogan'>
        <h4>Высококвалифицированные консультанты помогут подобрать инструмент для учебы, работы, души!</h4>
        <h5>Заполните заявку на телефонный звонок прямо сейчас</h5>
        </div>
        <Link to={'/form'}>
        <Button variant='primary'>Заявка</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={400} height={900}
        className="d-block w-100"
        src="./img/third.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <div className='text-slogan'>
        <h4>
          В честь открытия нашего магазина скидки до 50%
        </h4>
        <h5>
        Заполните заявку на телефонный звонок прямо сейчас
        </h5>
        </div>
        <Link to={'/form'}>
        <Button variant='primary'>Заявка</Button>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider