import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import UpdatesFeed from "../components/updatesFeed";

const UpdatesPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <UpdatesFeed />
    </div>
  );
};

export default UpdatesPage;
