import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-bl from-orange-200 to-orange-50 rounded-lg py-6 px-10 border-2 m-24">
      <div className="flex justify-center space-x-6 my-5">
        <h1 className="text-2xl text-gray-900 font-bold mb-1 content-center">
          MISSION 🚀
        </h1>
      </div>
      <div>
        <h1 className=" text-gray-700 leading-loose font-normal text-base text-justify">
            We help the most promising projects in the Solana ecosystem in the ascending world (India, South East Asia, Eastern Europe, and Africa) launch and grow. We are organized as a co-operative of creatives, operators, and investors who are experienced in launching and growing technology businesses.
            We value the sovereignty that comes with founding a company, the skin in the game that comes with investing, and the joy that comes with getting sh*t done. In a pre-crypto world, we had to fit into broiler categories — founder, investor, or employee. Crypto allows us to be free-range and be all 3 at the same time.
            This workspace is raw, WIP, and meant for our community. We're turning our organization inside-out so you can lurk, find opportunities and join us on this adventure.
        </h1>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <h1 className="text-lg font-semibold text-gray-400">🚧 This DAO is in experimental beta. Enter at your own risk.</h1>
      </div>
    </div>
  );
}

export default About;
