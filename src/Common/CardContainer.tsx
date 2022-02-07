import React from "react";
import { HeartIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";

function CardContainer() {
  return (
    <div className="bg-gradient-to-bl from-blue-200 to-blue-50 rounded-lg py-6 px-10 border-5 mb-7 hover:shadow-xl transition durtion-500 ease-out">
      <div className="flex items-center space-x-6 mb-4">
        <img
          className="h-20 w-20 object-cover object-center rounded-lg"
          src="/tanmay.jpg"
          alt="photo"
        />
        <div>
          <p className="text-xl text-gray-900 font-bold mb-1">
            My proof of work
          </p>
          <div className="flex flex-row">
            <p className="text-base text-blue-600 font-normal">IamTanmay • </p>
            <p className="text-base text-blue-600 font-normal">
              #WalletAddress
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-700 leading-loose font-normal text-base text-justify">
          Proof of work (PoW) describes a system that requires a
          not-insignificant but feasible amount of effort in order to deter
          frivolous or malicious uses of computing power, such as sending spam
          emails or launching denial of service attacks. The concept was
          subsequently adapted to securing digital money by....
        </p>
      </div>
      <div className="flex flex-row justify-end mt-4">
        <HeartIcon
          className="h-8 w-8 text-gray-500 ml-10 cursor-pointer hover:text-yellow-500 hover:shadow-lg transition durtion-200 ease-out"
          aria-hidden="true"
        />
        <ChatAltIcon
          className="h-8 w-8 text-gray-500 ml-10 cursor-pointer hover:text-yellow-500 hover:shadow-lg transition durtion-200 ease-out"
          aria-hidden="true"
        />
        <ShareIcon
          className="h-8 w-8 text-gray-500 ml-10 cursor-pointer hover:text-yellow-500 hover:shadow-lg transition durtion-200 ease-out"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default CardContainer;
