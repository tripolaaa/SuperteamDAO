import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import BountiesFeed from "../components/bountiesFeed";
import ApplyFilter from "../src/Applicables/ApplyFilter";

const BountiespPage: NextPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <ApplyFilter />
      <BountiesFeed />
    </div>
    </>
  );
};

export default BountiespPage;
