import React from "react";
import "./styles.scss";
import twit from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import zallytwo from "../../assets/zally.png";
import beto from "../../assets/betopic.png";
import erick from "../../assets/erick.png";
import antony from "../../assets/antony.png";
import byron from "../../assets/byron.png";
import migue from "../../assets/migue.png";
import ernesto from "../../assets/ernesto.png";
import jorge from "../../assets/jorge.png";

export const AboutUs = () => {
  return (
    <>
      <section className="aboutus__container">
        <h1 className="aboutus__titleone">About</h1>
        <p className="aboutus__text">
          El proyecto ChartCovid es una demostración del equipo Platzi Master el cual tiene el objetivo de mostrar las
          actualizaciones por medio de Charts sobre el estatus actual de la pandemia COVID-19, se actualiza
          constantemente y tiene sus Charts de países de mayor a menor infectados así como su top de recuperados y su
          histórico del país de donde el usuario provenga.{" "}
        </p>
        <h1 className="aboutus__tittletwo">Team</h1>
      </section>
      <div className="team">
        <section className="team__one">
          <img className="team__photo" src={zallytwo} alt="zally" />
          <h1 className="team__title">Zally</h1>
          <p className="team__career">Master Coach</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={beto} alt="beto" />
          <h1 className="team__title">Beto</h1>
          <p className="team__career">Frontend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={erick} alt="erick" />
          <h1 className="team__title">Erick</h1>
          <p className="team__career">Frontend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={antony} alt="antony" />
          <h1 className="team__title">Antony</h1>
          <p className="team__career">Backend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={byron} alt="byron" />
          <h1 className="team__title">Byron</h1>
          <p className="team__career">Backend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={migue} alt="migue" />
          <h1 className="team__title">Miguel</h1>
          <p className="team__career">Frontend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={jorge} alt="jorge" />
          <h1 className="team__title">Jorge</h1>
          <p className="team__career">Backend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
        <section className="team__one">
          <img className="team__photo" src={ernesto} alt="ernesto" />
          <h1 className="team__title">Ernesto</h1>
          <p className="team__career">Frontend Developer</p>
          <div className="team__social">
            <img className="team__twit" src={twit} alt="twitter" />
            <img className="team__link" src={linkedin} alt="link" />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
