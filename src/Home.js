import React from "react";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AugART2021/Hero/9Series_fader_tallhero_3000x1200._CB645459311_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="45373738"
            title="GOQii Smart Vital Fitness SpO2, body temperature and blood pressure tracker with 3 months personal Coaching"
            image="https://m.media-amazon.com/images/I/51UUJpcldDL._AC_UY327_FMwebp_QL65_.jpg"
            price={4299}
            rating={4}
          />
          <Product
            id="934247237"
            title="Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime"
            image="https://m.media-amazon.com/images/I/71Q3iSQAwAS._AC_UY327_FMwebp_QL65_.jpg"
            price={16999}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="91254135"
            title="Lenovo IdeaPad Slim 3 2021 11th Gen Intel Core i5 15.6 FHD Thin & Light Laptop (8GB/512GB SSD/Windows 10/MS Office/Backlit Keyboard"
            image="https://m.media-amazon.com/images/I/61q6x-ll5FL._AC_UY327_FMwebp_QL65_.jpg"
            price={56990}
            rating={5}
          />
          <Product
            id="23242353"
            title="MI Cordless Beard Trimmer 1C, with 20 length settings, 60 MInutes of usage, & USB Fast charging, black"
            price={999}
            image="https://m.media-amazon.com/images/I/61TmtuN7yAL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="6454343"
            title="ES-8133-55 Hawke Limited Edition Watch for Men"
            image="https://m.media-amazon.com/images/I/71xl0xs5knS._AC_UL480_FMwebp_QL65_.jpg"
            price={29970}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="92742372"
            title="Philips Audio Performance TAPH802BK Hi-Res Audio Bluetooth 5.0 Over-Ear Headphones with Quick Charge (Black)"
            image="https://m.media-amazon.com/images/I/51HAM36KuCL._AC_UY327_FMwebp_QL65_.jpg"
            price={4499}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
