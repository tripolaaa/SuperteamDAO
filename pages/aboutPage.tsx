import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import About from "../src/Common/About";

const AboutPage: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
        <About/>
    </div>
    </>
  );
};

export default AboutPage;
