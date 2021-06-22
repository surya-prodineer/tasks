//Component for Task 2 ( Display 5 items from each group)
import React from "react";
import Content from "../public/Content";
import styles from "../styles/Home.module.css";

const Task2 = ({ dataWithPush, dataWithEditor }) => {
  return (
    <div>
      <h1 className={styles.title}>Task 2</h1>
{/* Print count of objects with source "Push"*/}
      <p>
        No of Records with value – “Push”:
        <span className={styles.numStyle}>
          {dataWithPush ? dataWithPush.length : "NA"}
        </span>
      </p>
      <div className={styles.table}>
        {/* Display 5 items whose source is Push */}
        {dataWithPush
          ? dataWithPush.slice(0, 5).map((item) => {
              return (
                <Content
                  key={item._id}
                  type={item.type}
                  headline={item.headline}
                />
              );
            })
          : "Nothing To show...."}
      </div>
{/* Print count of objects with source "Editor"*/}
      <p>
        No of Records with value – “Editor”:
        <span className={styles.numStyle}>
          {dataWithEditor ? dataWithEditor.length : "NA"}
        </span>
      </p>
      <div className={styles.table}>
        {/* Display 5 items whose source is Editor */}
        {dataWithEditor
          ? dataWithEditor.slice(0, 5).map((item) => {
              return (
                <Content
                  key={item._id}
                  type={item.type}
                  headline={item.headline}
                />
              );
            })
          : "Nothing To show...."}
      </div>
    </div>
  );
};

export default Task2;
