import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded">Latest</p>

      <Marquee
        className="flex gap-10 cursor-pointer"
        pauseOnHover={true}
        speed={60}
      >
        <p className="font-bold mr-2">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold bg-red-500 rounded p-1 text-white mr-5">
          ⚡ Tech Update: Firebase Adds AI Integration for Smarter App
          Development!
        </p>
        <p className="font-bold bg-gray-900 text-white p-1 rounded">
          Breaking News: React 19 Released — New Hooks and Performance Boost
          Announced!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
