import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import CollabFeed from "../src/components/collabFeed";
import CreateCollabRequest from "../src/Applicables/CreateCollabRequest";

const CollabPage: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <CreateCollabRequest />
        <CollabFeed />
      </div>
    </>
  );
};

export default CollabPage;
