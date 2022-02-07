import React from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

function ApplyFilter() {
  return (
    <div className="flex justify-end">
      <div className="bg-white rounded-lg py-1 px-10 border-2 mt-2 w-48 cursor-pointer">
        <div className="space-x-6 flex flex-row">
          <AdjustmentsIcon />
          <h1 className="text-lg text-gray-900 font-bold mb-1">
            Apply Filters
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ApplyFilter;
