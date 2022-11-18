import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import styles from "../home/home.module.css";
import Footer from '../footer/footer.jsx'
import NavBar from '../navbar/navbar.jsx'
import { Link, useHistory } from "react-router-dom";
export default function FormRegister() {
  return (
    <div className={styles.formRegister} align="center">
    <h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar className={styles.navbar}></NavBar>
<form className={styles.form} novalidate>
  <h1>Registrate!</h1>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <input type="text" className="form-control" id="validationCustom01" placeholder="Nombre" required></input>
    </div>
    <br></br>
    <div className="col-md-4 mb-3">
      <input type="text" className="form-control" id="validationCustom02" placeholder="Email" required></input>
    </div>
    <br></br>
    <div className="col-md-4 mb-3">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required></input>
      </div>
    </div>
    <br></br>
    <div className="col-md-4 mb-3">
      <div className="input-group">
        <input type="password" className="form-control" id="validationCustomUsername" placeholder="Contraseña" aria-describedby="inputGroupPrepend" required></input>
      </div>
    </div>
    <br></br>
  </div>
  <button className="btn btn-outline-warning" type="submit">Registrarse</button>
</form>
<h6 className={styles.yatenes}>¿Ya tenes una cuenta? </h6>
<Link to= {`/login`}><h6 className={styles.yatenes}>inicia sesion</h6></Link>
<Footer></Footer>
    </div>
  );
}