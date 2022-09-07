import React from 'react';
import whatsapp from "../../src/assets/images/whatsapp-svgrepo-com (1).svg"

const Homepage = () => {
  return (
    <div>
      <div className="wrap">
        <div className="links">
          <ul>
            <li><a href="https://wa.me/+996507070609" className="link">Сайт</a></li>
            <br/><br/>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Молодая гвардия (Адресс на карте)
              <span><br/>Главный фелиал</span>
            </a>
            </li>
            <li className="itemsCenter itemsInBox">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> Молодая Гвардия
              </a>
              <p/>
            </li>
            <br/>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="link"> LinkedIn</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="link"> Codepen</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="link"> My website</a>
            </li>
          </ul>
          <div className="card">
            <h3>Card</h3>
            <p>Just a card to display some information ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;