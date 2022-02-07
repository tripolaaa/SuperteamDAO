import { useEffect, useState } from "react";
import Image from "next/image";
import MainFeed from "./proofOfWork";
import Navbar from "./navbar";
type Event = "connect" | "disconnect";

interface Phantom {
  on: (event: Event, callback: () => void) => void;
  connect: () => Promise<void>;
}

const ConnectToPhantom = () => {
  const [phantom, setPhantom] = useState<Phantom | null>(null);

  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window["solana"]);
    }
  }, []);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    phantom?.on("connect", () => {
      setConnected(true);
    });

    phantom?.on("disconnect", () => {
      setConnected(false);
    });
  }, [phantom]);

  const connectHandler = () => {
    phantom?.connect();
  };

  if (true) {
    if (true) {
      return (
        <>
          <Navbar />
          <MainFeed />
        </>
      );
    }

    return (
      <div
        className="flex justify-center self-center items-center flex-col"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <Image
          src={"/superTeam.jpg"}
          height={200}
          width={200}
          className={"rounded-lg"}
        />
        <button
          onClick={connectHandler}
          className="rounded-md px-6 py-3 my-6 bg-amber-400 font-bold cursor-pointer hover:bg-amber-600 
        hover:shadow-lg transition durtion-200 ease-out"
        >
          Connect to Phantom
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex justify-center self-center items-center flex-col"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Image
        src={"/superTeam.jpg"}
        height={200}
        width={200}
        className={"rounded-lg"}
      />
      <a
        href="https://phantom.app/"
        target="_blank"
        className="rounded-md px-6 py-3 my-6 bg-amber-400 font-bold cursor-pointer hover:bg-amber-600 
        hover:shadow-lg transition durtion-200 ease-out"
      >
        Get Phantom
      </a>
    </div>
  );
};

export default ConnectToPhantom;
