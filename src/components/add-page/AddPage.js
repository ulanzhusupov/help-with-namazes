import React from "react";
import "./AddPage.css";
import Fadjr from "../../images/sunrise.jpg";
import Zuhr from "../../images/zuhr.webp";
import Asr from "../../images/asr.jpg";
import Sham from "../../images/sunset.jpg";
import Isha from "../../images/night.jpg";

function AddPage() {
  return(
    <main className="main page-add">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="namazes-card">
              <a href="#"><i></i>Назад</a>
              <h3>Добавить пропущенный намаз</h3>
              <div className="form__wrapper">
                <div className="form__input">
                  <span>1</span>
                  <p>
                    <label htmlFor="date">Добавьте дату пропущенного намаза</label>
                    <input type="date" name="date"/>
                  </p>
                </div>
                <div className="form__input">
                  <span>2</span>
                  <p>
                    Выделите намазы которые пропустили
                  </p>
                </div>
                <ul className="namaz-time__list">
                  <li className="namaz-time__item" style={{backgroundImage: `url(${Fadjr})`}}>
                    <h4>Фаджр</h4>
                    <input type="checkbox"/>
                  </li>
                  <li className="namaz-time__item" style={{backgroundImage: `url(${Zuhr})`}}>
                    <h4>Зухр</h4>
                    <input type="checkbox"/>
                  </li>
                  <li className="namaz-time__item" style={{backgroundImage: `url(${Asr})`}}>
                    <h4>Аср</h4>
                    <input type="checkbox"/>
                  </li>
                  <li className="namaz-time__item" style={{backgroundImage: `url(${Sham})`}}>
                    <h4>Шам</h4>
                    <input type="checkbox"/>
                  </li>
                  <li className="namaz-time__item" style={{backgroundImage: `url(${Isha})`}}>
                    <h4>Иша</h4>
                    <input type="checkbox"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddPage;