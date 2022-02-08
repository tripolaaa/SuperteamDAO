import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import UpdatesFeed from "../src/components/updatesFeed";

const UpdatesPage: NextPage = () => {
  return (
    <>
      <UpdatesFeed />
    </>
  );
};

export default UpdatesPage;
