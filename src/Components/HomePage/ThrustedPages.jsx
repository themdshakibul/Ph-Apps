import React from "react";

const ThrustedPages = () => {
  return (
    <section>
      <div className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] mb-20">
        <div className="container mx-auto px-2 py-10 text-white space-y-10 text-center">
          <h2 className="text-4xl font-black">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-30 lg:gap-60">
            <div className="space-y-2">
              <p className="font-semibold text-xl">Total Downloads</p>
              <h1 className="font-bold text-5xl">29.6M</h1>
              <p className="font-semibold text-xl">21% more than last month</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xl">Total Reviews</p>
              <h1 className="font-bold text-5xl">906K</h1>

              <p className="font-semibold text-xl">46% more than last month</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xl">Active Apps</p>
              <h1 className="font-bold text-5xl">132+</h1>
              <p className="font-semibold text-xl">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThrustedPages;
