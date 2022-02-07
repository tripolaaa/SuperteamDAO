import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import BountiesFeed from "../src/components/bountiesFeed";
import ApplyFilter from "../src/Applicables/ApplyFilter";

const BountiespPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <ApplyFilter />
      <BountiesFeed />
    </div>
  );
};

export default BountiespPage;
