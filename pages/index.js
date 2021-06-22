import styles from "../styles/Home.module.css";
import Task1 from "./Task1";
import Task2 from "./Task2";

// Get static data from the server
export const getStaticProps = async () => {
  const res = await fetch("http://18.136.165.153:9000/search");
  const data = await res.json();
  return {
    //return the data as apiData
    props: { apiData: data.listItem },
  };
};

export default function Home({ apiData }) {
  //Filter and Store the objects which has 'source' value as 'Push'
  const dataWithPush = apiData.filter((item) => item.source === "Push");

  //Filter and Store the objects which has 'source' value as 'Editor'
  const dataWithEditor = apiData.filter((item) => item.source === "Editor");

  return (
    <div className={styles.mainDiv}>
      {/*Use components Task1 and Task2*/}
      <Task1 dataWithPush={dataWithPush} dataWithEditor={dataWithEditor} />
      <Task2 dataWithPush={dataWithPush} dataWithEditor={dataWithEditor} />
    </div>
  );
}
