import type { NextPage } from "next";
import CollabCard from "../src/Common/CollabCard";

const MainFeed: NextPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="w-full grid grid-cols-1 gap-6 pt-3 pb-3">
        <CollabCard />
      </div>
      <div className="w-full grid grid-cols-1 gap-6 pt-3 pb-3">
        <CollabCard />
      </div>
      <div className="w-full grid grid-cols-1 gap-6 pt-3 pb-3">
        <CollabCard />
      </div>
      <div className="w-full grid grid-cols-1 gap-6 pt-3 pb-3">
        <CollabCard />
      </div>
    </section>
  );
};

export default MainFeed;
