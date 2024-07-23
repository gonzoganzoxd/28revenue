import React from 'react';
import './Dashboard.css';

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
          <a href="/register.html" className="advice">Agenda tu asesoría</a>
        </div>
      </div>
      <div className="image">
        <img
          src="https://i.ytimg.com/vi/kK7LeYwpoQ8/maxresdefault.jpg"
          alt="Team"
        />
      </div>
    </main>
  );
};

export default Dashboard;
