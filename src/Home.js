import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="86234982"
            title="Wolfver"
            image="https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL210_SR195,210_.jpg"
            price={11127.12}
            rating={5}
          />
          <Product
            id="109724022"
            title="the lean start"
            image="https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL127_SR127,127_.jpg"
            price={12902.91}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="8908309583"
            title="Wolfver"
            image="https://m.media-amazon.com/images/I/61QQT8i-p-L._AC_UY218_.jpg"
            price={1001.2}
            rating={5}
          />
          <Product
            id="02348244"
            title="the lean start"
            image="https://m.media-amazon.com/images/I/71k9P6w0V1L._AC_UL320_.jpg"
            price={121290.91}
            rating={4}
          />

          <Product
            id="402973242"
            title="the lean start"
            image="https://images-na.ssl-images-amazon.com/images/I/41tzuaDZOPL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            price={1000.12}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="9873043"
            title="the lean start"
            image=" https://m.media-amazon.com/images/I/81Grc85hfiL._AC_UY218_.jpg"
            price={12121.90}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
