import React from 'react';
import whatsapp from "../../src/assets/images/whatsapp-svgrepo-com (1).svg"

const Homepage = () => {
  return (
    <div>
      <div className="logo">
        <img src="//taplink.st/a/d/2/c/8/6f1593.jpg?1" alt=""/>
      </div>
      <div className="text">
        <p>🏠Адреса и 📲контакты г.Бишкек</p>
        <p>‌кликни по ссылке👇</p>
      </div>
      <div className="wrap">
        <div className="links">
          <ul>
            <li className="bBlack"><a href="https://wa.me/+996507070609" className="link">
              <div><img src="https://cdn-icons-png.flaticon.com/512/44/44645.png" alt="" className="linkLogo"/></div>
              <p>Сайт</p>
            </a></li>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Молодая гвардия (Адресс на карте)
              <span><br/>Главный фелиал</span>
            </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> Молодая Гвардия
              </a>
              <p/>
            </li>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Боконбаева 96А (Адресс на карте)
              <span><br/>FEN маркет</span>
            </a>
            </li>

            <li className="itemsCenter itemsInBox itemColor">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> WhatsApp Боконбаева
              </a>
              <p/>
            </li>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Орто-Сай (Адресс на карте)
              <span><br/>Все для салонов красоты</span>
            </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> WhatsApp Орто-Сай
              </a>
              <p/>
            </li>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Аламедин (Адресс на карте)
              <span><br/>Все для салонов красоты</span>
            </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> WhatsApp Аламедин
              </a>
              <p/>
            </li>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Аламедин-1 (Адресс на карте)
              <span><br/>Все для салонов красоты</span>
            </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> WhatsApp Аламедин-1
              </a>
              <p/>
            </li>
            <li><a href="https://2gis.kg/bishkek/search/fen/firm/70000001024590847?m=74.575869%2C42.871204%2F19.97"
                   className="link">Ахунбаева (Адресс на карте)
              <span><br/>Все для салонов красоты</span>
            </a>
            </li>
            <li className="itemsCenter itemsInBox itemColor">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> WhatsApp Ахунбаева
              </a>
              <p/>
            </li>

            <li className="black itemsCenter itemsInBox itemBack">
              <img src={whatsapp} alt="" width={30}/>
              <a href="https://wa.me/+996706609030" className="link"> Менеджер по оборудованию
              </a>
              <p/>
            </li>
          </ul>
        </div>
        <img src="../assets/images/123.png" alt=""/>
      </div>
      <div className="block">
        <div className="item">
          <img src="../assets/images/photo1.jpeg" alt=""/>
        </div>
        <div className="item">
        </div>
      </div>
    </div>
  );
};

export default Homepage;