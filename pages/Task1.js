//Component for Task 1 (Count the no. Objects with Push and Editor as source)
import React from "react";
import styles from "../styles/Home.module.css";

const Task1 = ({ dataWithPush, dataWithEditor }) => {
  return (
    <div>
      <h1 className={styles.title}>Task 1</h1>
      {/* Print count of objects with source "Push"*/}
      <p>
        No of Records with value – “Push”:
        <span className={styles.numStyle}>
          {dataWithPush ? dataWithPush.length : "NA"}
        </span>
      </p>
      {/* Print count of objects with source "Editor"*/}
      <p>
        No of Records with value – “Editor”:
        <span className={styles.numStyle}>
          {dataWithEditor ? dataWithEditor.length : "NA"}
        </span>
      </p>
    </div>
  );
};

export default Task1;
