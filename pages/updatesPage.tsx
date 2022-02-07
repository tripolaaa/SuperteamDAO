import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import UpdatesFeed from "../components/updatesFeed";

const UpdatesPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <UpdatesFeed />
    </>
  );
};

export default UpdatesPage;
