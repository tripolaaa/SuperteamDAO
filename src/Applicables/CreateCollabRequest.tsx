import React from "react";
import { UsersIcon } from "@heroicons/react/outline";

function CreateCollabRequest() {
  return (
    <div className="flex justify-end">
    <div className="bg-white rounded-lg py-1 px-10 border-2 w-48 cursor-pointer mr-60 mt-7 hover:shadow-lg transition durtion-200 ease-out">
      <div className="space-x-3 flex flex-row text-gray-900">
        <UsersIcon />
        <p className="text-lg text-gray-900 font-bold mb-1">
          Create Request
        </p>
      </div>
    </div>
  </div>
);
}

export default CreateCollabRequest;
