import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import About from "../src/Common/About";

const AboutPage: NextPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
        <About/>
    </div>
    </>
  );
};

export default AboutPage;
