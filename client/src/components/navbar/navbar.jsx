import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import styles from "./navbar.module.css";
import { Link, useHistory } from "react-router-dom";
export default function NavBar() {
  return (
<div className={styles.navbar}>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to= {`/`}> <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">inicio</a>
        </li></Link>
        <li className="nav-item">
          <a className="nav-link" href="#">puntuaciones</a>
        </li>
        <Link to= {`/register`}><li className="nav-item">
        <a className="nav-link">tu perfil</a>
          
        </li></Link>
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}