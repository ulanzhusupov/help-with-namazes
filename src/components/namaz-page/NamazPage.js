import React from 'react';
import "./NamazPage.css";
import pageBg from "../../images/page-bg-1.jpg";

function NamazPage() {
  return(
    <main className="main page-namaz" style={{background: `url(${pageBg})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="namazes-card">
              <h3>Пропущенные намазы</h3>
              <ul className="namazes__list">
                <li className="namazes__item">
                  <a href="#" className="namazes__link">
                    <span><b>15.09.2013</b></span>
                    <ul className="skipped__link__list">
                      <li>Фаджр</li>
                      <li>Зухр</li>
                      <li>Аср</li>
                      <li>Шам</li>
                      <li>Иша</li>
                    </ul>
                  </a>
                </li>
                <li className="namazes__item">
                  <a href="#" className="namazes__link">
                    <span><b>15.09.2013</b></span>
                    <ul className="namazes__link__list">
                      <li>Фаджр</li>
                      <li>Зухр</li>
                      <li>Аср</li>
                      <li>Шам</li>
                      <li>Иша</li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="user-progress">
              <div className="progress-bar">64 дня</div>
              <p>Еще чуть-чуть, поднажмите!</p>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NamazPage;