import React from "react";

function UpdatesCard() {
  return (
    <div className="bg-white rounded-lg py-6 px-10 border-2">
      <div className="flex justify-center space-x-6 my-5">
        <h1 className="text-2xl text-gray-900 font-bold mb-1 content-center">
          #1 Update - SolHack Collaboration
        </h1>
      </div>
      <div>
        <p className="text-gray-400 leading-loose font-normal text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint
          voluptatum sunt aspernatur eum quisquam facilis deleniti quaerat
          voluptate commodi recusandae nobis, impedit, eveniet exercitationem
          natus dignissimos ut explicabo praesentium ea nulla tenetur, sequi
          temporibus? Nam ipsum eligendi vero voluptatem natus debitis
          temporibus? Eveniet ipsa aliquid impedit illum! Ullam, non!
        </p>
      </div>
      <div className="flex flex-row justify-between mt-4">
        <h1 className="text-lg font-semibold">12th February 2022</h1>
      </div>
    </div>
  );
}

export default UpdatesCard;
