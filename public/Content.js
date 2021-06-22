//Component to display data as table
import React from "react";
import style from "../styles/Home.module.css";

const Content = ({ type, headline }) => {
  return (
    <div className={style.tableRow}>
      <p className={style.typeColumn}>{type}</p>
      <p className={style.headlineColumn}>{headline}</p>
    </div>
  );
};

export default Content;
