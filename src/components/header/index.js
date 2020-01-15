import React from 'react';
import userImg from "../../images/user-img.png";
import "./header.css";

const Header = () => {
  return (
    <header className="page-header">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3">
              <nav className="header__nav">
                <button className="header__nav__btn "><span></span></button>
                <ul className="header__nav__list">
                  <li className="header__nav__item header__nav__item--active">
                    <a href="#">Главное</a>
                  </li>
                  <li className="header__nav__item">
                    <a href="#">Намазы</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-1">
              <div className="header__user">
                <img src={userImg} alt="Фотография пользователя" className="header__user__pic"/>
                <p className="header__user__name">Ulan</p>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
 
export default Header;