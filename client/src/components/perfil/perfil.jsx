import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styles from "../navbar/navbar";
export default function Perfil() {
    let guestId = localStorage.getItem("userInfo");
    let user = JSON.parse(guestId)
  return (
<div align="center">
{console.log(user)}
<h1>Tu Perfil</h1>
<h2>Nombre de Usuario: {user.userName}</h2>
<h2>Email: {user.email}</h2>
<h2>Puntaje: {user.puntaje}</h2>
<h2>Figuritas: {user.level}</h2>
<Link className={styles.decoration} to= {`/login`}><button onClick={() => {localStorage.removeItem('userInfo')}} className="btn btn-outline-warning">Cerrar sesion</button></Link>
</div>
  );
}