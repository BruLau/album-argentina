import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import styles from "../home/home.module.css";
import Footer from '../footer/footer.jsx'
import NavBar from '../navbar/navbar.jsx'
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
export default function FormLogin() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push(`/`);
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
         alert("Por favor ingrese todos los campos");
        // Swal(
        //   'Por favor ingrese todos los campos','','warning',{buttons:false,timer:3500}
        // )

      }
      const guest = await axios.get(`/api/user/${email}`)
      if(guest.data.length === 0) return alert("Correo no registrado");
      
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
         `/api/login`,
        // "http://localhost:3001/api/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (error) {
       alert("Usuario o contraseña incorrectos");
      // Swal(
      //   'Usuario o contraseña incorrecta','','error',{buttons:false,timer:3500}
      // )
    }
  };







  return (
    <div className={styles.formRegister} align="center">
    <h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar className={styles.navbar}></NavBar>
<form onSubmit={submitHandler} className={styles.form} novalidate>
  <h1>Inicio de sesion</h1>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="validationCustom02" placeholder="Email" value={email} required></input>
    </div>
    <br></br>
    <div className="col-md-4 mb-3">
      <div className="input-group">
        <input  onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="validationCustomUsername" value={password} placeholder="Contraseña" aria-describedby="inputGroupPrepend" required></input>
      </div>
    </div>
    <br></br>
  </div>
  <button className="btn btn-outline-warning" type="submit">Iniciar sesion</button>
</form>
<h6 className={styles.yatenes}>¿Aun no tienes una cuenta? </h6>
<Link to= {`/register`}> <h6 className={styles.yatenes}>Registrate</h6></Link>
<Footer></Footer>
    </div>
  );
}