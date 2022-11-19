import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import s from "./Quiz.module.css";
import styles from "../navbar/navbar";
import FormLogin from "../formLogin/formLoging";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

import { getQuiz } from "../../redux/Actions";
import axios from "axios";
export default function Quiz() {
    let guestId = localStorage.getItem("userInfo");
    let user = JSON.parse(guestId);
    console.log(user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuiz(user.level));
      }, [dispatch]);
    
      const [input, setInput] = useState([]);
   
    let quiz = useSelector((state) => state.quiz);
    async function  submitHandler(e) {
    if(input.rb==quiz[0].correcta){
    await axios.patch(`/api/user/${user._id}`)
    let dataStorage = JSON.parse(localStorage.getItem("userInfo"));
    dataStorage.level = dataStorage.level + 1;
    localStorage.setItem("userInfo", JSON.stringify(dataStorage));
    alert("hola") 
}
    else{
        alert("fas") 
    }
}
   
function handleChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });}


  return (
 user ?
<div className={s.perfilcss} align="center">
<h1 className={styles.h1home} align="center">ALBUM ARGENTINA 2022</h1>
      <NavBar className={styles.navbar}></NavBar>
      <br></br>
<h1>Preguntas</h1>
<div align="center">
    {console.log(quiz[0] ? quiz[0].pregunta : "Cargando...")}
<h2>{quiz[0] ? quiz[0].pregunta  : "Cargando..."}</h2>
<br></br>
    {/* <form onSubmit={submitHandler}> */}
<input  onChange={handleChange} className={s.radio}  type="radio" name = "rb" id="html"  value={quiz[0] ? quiz[1][0] : "Cargando..."}></input>
<h4 className="form-check-label"  for="html">{quiz[0] ? quiz[1][0] : "Cargando..."}</h4><br></br>
<input className={s.radio}  onChange={handleChange} name = "rb" type="radio" id="css"  value={quiz[0] ? quiz[1][1] : "Cargando..."}></input>
<h4  className="form-check-label"  for="css">{quiz[0] ? quiz[1][1] : "Cargando..."}</h4><br></br>
<input  className={s.radio}  onChange={handleChange} name = "rb" type="radio" id="css"  value={quiz[0] ? quiz[1][2] : "Cargando..."}></input>
<h4 className="form-check-label"  for="css">{quiz[0] ? quiz[1][2] : "Cargando..."}</h4><br></br>
<input className={s.radio} onChange={handleChange} name = "rb" type="radio" id="javascript"  value={quiz[0] ? quiz[1][3] : "Cargando..."}></input>
<h4  className="form-check-label "  for="javascript">{quiz[0] ? quiz[1][3] : "Cargando..."}</h4>
{/* </form>*/}</div> 
<br></br>
{/* <input value="Iniciar Sesión" className="btn btn-outline-warning" type="submit" ></input> */}
<button type="submit" value="Submit" onClick={submitHandler } className="btn btn-outline-warning">Comprobar</button>
<Footer></Footer>
</div>:
<FormLogin></FormLogin>
  );
}