import React from "react";

export default function Loader() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <span className="loading size-10 lg:size-20 loading-spinner text-info"></span>
    </div>
  );
}
