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
      <News />
    </>
  );
}
