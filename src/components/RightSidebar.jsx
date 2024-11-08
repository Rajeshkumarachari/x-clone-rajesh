"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import News from "./News";

export default function RightSidebar() {
  const [input, setInput] = useState(" ");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  };
  return (
    <>
      <div className=" sticky top-0 bg-white py-2">
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
            className="input input-bordered rounded-3xl input-primary w-full max-w-xs"
          />
        </form>
      </div>
      <div className="bg-gray-100 rounded-xl my-4 p-3  ">
        <h2 className=" text-[23px] font-bold">Subscribe to Premium</h2>
        <p className="font-medium text-lg">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className=" bg-sky-500 text-white px-4 py-2 mt-3 font-semibold text-base rounded-[26px] ">
          Subscribe
        </button>
      </div>
      <News />
    </>
  );
}
