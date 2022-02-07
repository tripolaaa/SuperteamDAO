import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import BountiesFeed from "../components/bountiesFeed";
import ApplyFilter from "../src/Applicables/ApplyFilter";

const BountiespPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <ApplyFilter />
      <BountiesFeed />
    </div>
  );
};

export default BountiespPage;
