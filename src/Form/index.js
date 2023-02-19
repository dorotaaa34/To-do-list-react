import React from "react";
import "./style.css";

const Form = () => (
    <form className="form" type="input">
    <input className="form__input" type="text" name="tasks" placeholder="Co jest do zrobienia?"/>
    <button className="form__button">Dodaj zadanie</button>
  </form>
);

export default Form;