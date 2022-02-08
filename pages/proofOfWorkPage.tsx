import type { NextPage } from "next";
import Navbar from "../src/components/navbar";
import POW from "../src/components/proofOfWork";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

type Event = "disconnect";

interface Phantom {
  on: (event: Event, callback: () => void) => void;
  disconnect: () => Promise<void>;
}

const ProofOfWork: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <POW />
      </div>
    </>
  );
};

export default ProofOfWork;
