import React from "react";
import { HeartIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";

function CardContainer() {
  return (
    <div className="bg-white rounded-lg py-6 px-10 border-2">
      <div className="flex items-center space-x-6 mb-4">
        <img
          className="h-28 w-28 object-cover object-center rounded-full"
          src="/tanmay.jpg"
          alt="photo"
        />
        <div>
          <p className="text-xl text-gray-700 font-normal mb-1">
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
        <p className="text-gray-400 leading-loose font-normal text-base text-justify">
        Proof of work (PoW) describes a system that requires a not-insignificant but 
        feasible amount of effort in order to deter frivolous or malicious uses of computing power, 
        such as sending spam emails or launching denial of service attacks. 
        The concept was subsequently adapted to securing digital money by....
        </p>
      </div>
      <div className="flex flex-row justify-end mt-4">
        <HeartIcon className="h-8 w-8 text-gray-400 ml-10" aria-hidden="true" />
        <ChatAltIcon
          className="h-8 w-8 text-gray-400 ml-10"
          aria-hidden="true"
        />
        <ShareIcon className="h-8 w-8 text-gray-400 ml-10" aria-hidden="true" />
      </div>
    </div>
  );
}

export default CardContainer;
