import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import Footer from '../footer/footer.jsx'
import NavBar from '../navbar/navbar.jsx'
import styles from "./home.module.css";
import album from "../../imagenes/album.png"

export default function Home() {
  return (
    <div >
      <h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar></NavBar>
      <div className={styles.pantalla}>
      <img src={album} className={styles.image} alt="no encontre la imagen" ></img>
      </div>
    <Footer></Footer>
    </div>
  );
}