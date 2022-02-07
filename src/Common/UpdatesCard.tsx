import React from "react";

function UpdatesCard() {
  return (
    <div className="bg-gradient-to-bl from-lime-200 to-lime-50 rounded-lg py-6 px-10 border-2 mb-5">
      <div className="flex justify-center space-x-6 my-5">
        <h1 className="text-2xl text-gray-900 font-bold mb-5">
          #1 Update - SolHack Collab
        </h1>
      </div>
      <div>
        <p className="text-gray-700 leading-loose font-normal text-base text-justify">
        The idea is simple – as a Time Swap member you can earn 'time' by giving help and support to 
        other members in your community. This could be things you enjoy or are good at.
        You can then spend that time on getting help from other members. 
        This could be help with something that you find difficult, or maybe someone in your 
        community could teach you a new skill. If you prefer, you can donate your time gained to 
        someone else.
        </p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <h1 className="text-lg font-semibold">⏰ 12th February 2022</h1>
      </div>
    </div>
  );
}

export default UpdatesCard;
