import React from "react";
import { UsersIcon } from "@heroicons/react/outline";

function CreateCollabRequest() {
  return (
    <div className="flex justify-end">
      <div className="bg-white rounded-lg py-1 px-10 border-2 mt-2 w-48 cursor-pointer">
        <div className="space-x-6 flex flex-row">
          <UsersIcon />
          <h1 className="text-lg text-gray-900 font-bold mb-1">
            Create Request
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CreateCollabRequest;
