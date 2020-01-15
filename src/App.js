import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="page">
        <header className="page-header">
          <div className="container-fluid">
            <div className="row justify-between">
              <div className="col-lg-3">
                <nav className="header__nav">
                  <button className="header__nav__btn"><span></span></button>
                  <ul className="header__nav__list">
                    <li className="header__nav__item">
                      <a href="#">Главное</a>
                    </li>
                    <li className="header__nav__item">
                      <a href="#">Намазы</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2">
                <div className="header__user">
                  <img src="" alt="Фотография пользователя" className="header__user__pic"/>
                  <p className="header__user__name">Ulan</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;