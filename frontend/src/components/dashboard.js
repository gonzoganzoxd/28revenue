import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Dashboard.css';

import image1 from './assets/images/carrusel1.jpg';
import image2 from './assets/images/carrusel2.jpg';
import image3 from './assets/images/carrusel3.jpg';
import image4 from './assets/images/carrusel4.jpg';
import image5 from './assets/images/carrusel5.jpg';
import image6 from './assets/images/carrusel6.jpg';
import image7 from './assets/images/carrusel7.jpg';

const Dashboard = () => {
  return (
    <main className="main">
      <div className="content">
        <h1>Tu éxito contable y financiero, nuestra prioridad.</h1>
        <p className="highlight">
          <span>¡Potencia</span> tus finanzas y alcanza <span>tus metas!</span>
        </p>
        <p className="hashtag">#MasQueUnContador</p>
        <div className="buttons">
          <a href="/empieza_form.html" className="start">Empieza</a>
          <a href="/register" className="advice">Agenda tu asesoría</a>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={image6} alt="Imagen 6" />
            <p className="legend">Imagen 6</p>
          </div>
          <div>
            <img src={image5} alt="Imagen 5" />
            <p className="legend">Imagen 5</p>
          </div>
          <div>
            <img src={image4} alt="Imagen 4" />
            <p className="legend">Imagen 4</p>
          </div>
          <div>
            <img src={image3} alt="Imagen 3" />
            <p className="legend">Imagen 3</p>
          </div>
          <div>
            <img src={image2} alt="Imagen 2" />
            <p className="legend">Imagen 2</p>
          </div>
          <div>
            <img src={image1} alt="Imagen 1" />
            <p className="legend">Imagen 1</p>
          </div>
          <div>
            <img src={image7} alt="Imagen 7" />
            <p className="legend">Imagen 7</p>
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default Dashboard;
