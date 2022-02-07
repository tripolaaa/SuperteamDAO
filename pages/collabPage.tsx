import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import CollabFeed from "../components/collabFeed";
import CreateCollabRequest from "../src/Applicables/CreateCollabRequest";

const CollabPage: NextPage = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <CreateCollabRequest />
      <CollabFeed />
    </div>
    </>
  );
};

export default CollabPage;
