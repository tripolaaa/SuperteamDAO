import type { NextPage } from "next";
import Navbar from "../components/navbar";
import POW from "../components/proofOfWork";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

type Event = "disconnect";

interface Phantom {
  on: (event: Event, callback: () => void) => void;
  disconnect: () => Promise<void>;
}

const ProofOfWork: NextPage = () => {
  const [phantom, setPhantom] = useState<Phantom | null>(null);

  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window["solana"]);
    }
  }, []);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    phantom?.on("disconnect", () => {
      setConnected(false);
    });
  }, [phantom]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <POW/>
      </div>
    </>
  );
};

export default ProofOfWork;