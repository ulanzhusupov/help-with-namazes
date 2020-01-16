import React, { Component } from 'react';
import Header from "./components/header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="page">
        <Header />
        <main className="page-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="last-namazes-card">
                      <div className="last-namazes-card__text">
                        <h3>Последний пропущенный</h3>
                        <p>В последний раз, вы пропустили НАМАЗ, НАМАЗ в ДАТА.</p>
                      </div>
                      <a href="#" className="card__btn">Восполнить</a>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="last-skipped-days">
                      <h3>Последние пропушенные намазы</h3>

                      <ul className="skipped__list">
                        <li className="skipped__item">
                          <a href="#" className="skipped__link">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">

              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;