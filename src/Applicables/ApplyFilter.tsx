import React from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

function ApplyFilter() {
  return (
      <div className="flex justify-end">
      <div className="bg-white rounded-lg py-1 px-10 border-2 w-48 cursor-pointer mr-60 mt-7 hover:shadow-lg transition durtion-200 ease-out">
        <div className="space-x-6 flex flex-row text-gray-900">
          <AdjustmentsIcon />
          <p className="text-lg text-gray-900 font-bold mb-1">
            Apply Filters
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplyFilter;
