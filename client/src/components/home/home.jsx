import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import Footer from '../footer/footer.jsx'
import NavBar from '../navbar/navbar.jsx'
import styles from "./home.module.css";
import imagenes from "../../imagenes/imagenes.js";
import FormLogin from "../formLogin/formLoging.jsx";
import { Link, useHistory } from "react-router-dom";
export default function Home() {
  let guestId = localStorage.getItem("userInfo");
  let User = JSON.parse(guestId)
  return (
      User ?
      <div >
      <h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar className={styles.navbar}></NavBar>
      <div className={styles.pantalla}>
      <img src={imagenes[User.level]} className={styles.image} alt="no encontre la imagen" ></img>
      </div>
      <br></br>
      <div align="center">
      <Link  className={styles.decoration} to= {`/quiz`}><button  className="btn btn-outline-warning">Conseguir figurita {User.level} </button></Link>
      </div>
    <Footer></Footer>
    </div> : 
    <div>
    <FormLogin></FormLogin>
  <Footer></Footer>
  </div>
   
  );
}