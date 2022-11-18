import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import styles from "../navbar/navbar";
import FormLogin from "../formLogin/formLoging";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import s from "./Quiz.module.css";
import { getQuiz } from "../../redux/Actions";
export default function Quiz() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuiz(1));
      }, [dispatch]);

    let quiz = useSelector((state) => state.quiz);
    let pregRamdom = quiz[Math.floor(Math.random() * quiz.length)]
if(pregRamdom){
    let arrObj = Object.values(pregRamdom)
    let cont = 0;
    var arrOrd =[]
    for(let i= 2; i<6;i++ ){
        arrOrd[cont] = arrObj[i]
        cont++
    }
    var arrDesord =[]
    arrDesord = arrOrd.sort(function() { return Math.random() - 0.5 });
    console.log(arrDesord)
}

    
    

    let guestId = localStorage.getItem("userInfo");
    let user = JSON.parse(guestId);
  return (
 user ?
<div className={s.perfilcss} align="center">
<h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar className={styles.navbar}></NavBar>
      <br></br>
<h1>Preguntas</h1>
<div>
<input type="radio" id="html" name="fav_language" value="HTML"></input>
<label for="html">{arrDesord ? arrDesord[0] : "Cargando..."}</label><br></br>
<input type="radio" id="css" name="fav_language" value="CSS"></input>
<label for="css">{arrDesord ? arrDesord[1] : "Cargando..."}</label><br></br>
<input type="radio" id="css" name="fav_language" value="CSS"></input>
<label for="css">{arrDesord ? arrDesord[2] : "Cargando..."}</label><br></br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
<label for="javascript">{arrDesord ? arrDesord[3] : "Cargando..."}</label>
</div>
<br></br>
<Link className={styles.decoration} to= {`/login`}><button onClick={() => {localStorage.removeItem('userInfo')}} className="btn btn-outline-warning">Cerrar sesion</button></Link>
<Footer></Footer>
</div>:
<FormLogin></FormLogin>
  );
}