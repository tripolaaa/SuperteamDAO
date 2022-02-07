import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import CollabFeed from "../components/collabFeed";
import CreateCollabRequest from "../src/Applicables/CreateCollabRequest";

const CollabPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <CreateCollabRequest />
      <CollabFeed />
    </div>
  );
};

export default CollabPage;
