//ola
import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import styles from "./footer.module.css";

export default function Footer() {
  return (
<div className={styles.navbar}>
  <footer className="d-flex flex-wrap justify-content-between  align-items-center py-3 my-4 border-top bg-warning w-100">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="text">&copy; 2021 Company, Inc</span>
    </div>

  
  </footer>
</div>

  );
}