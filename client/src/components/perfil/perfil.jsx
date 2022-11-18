import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styles from "../navbar/navbar";
import FormLogin from "../formLogin/formLoging";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import s from "./perfil.module.css";
export default function Perfil() {
    let guestId = localStorage.getItem("userInfo");
    let user = JSON.parse(guestId);
  return (
 user ?
<div className={s.perfilcss} align="center">
<h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar className={styles.navbar}></NavBar>
      <br></br>
{console.log(user)}
<h1>Tu Perfil</h1>
<h2>Nombre de Usuario: {user.userName}</h2>
<h2>Email: {user.email}</h2>
<h2>Puntaje: {user.puntaje}</h2>
<h2>Figuritas: {user.level}</h2>
<br></br>
<Link className={styles.decoration} to= {`/login`}><button onClick={() => {localStorage.removeItem('userInfo')}} className="btn btn-outline-warning">Cerrar sesion</button></Link>
<Footer></Footer>
</div>:
<FormLogin></FormLogin>
  );
}