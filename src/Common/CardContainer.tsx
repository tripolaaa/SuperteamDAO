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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
