import reatingImage from "../../assets/Image/icon-ratings.png";
import downloadImage from "../../assets/Image/icon-downloads.png";
import Demo1 from "../../assets/Image/demo-app (1).webp";
import { NavLink } from "react-router";
import { use } from "react";

const appPromis = fetch("/CardData.json").then((res) => res.json());

const TrendingApps = () => {
  const apps = use(appPromis);
  console.log("app", apps);

  return (
    <section>
      <div className="container mx-auto px-2">
        <header className="space-y-3 text-center mb-10">
          <h2 className="text-5xl font-bold">Trending Apps</h2>
          <p className="font-semibold ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </header>

        {/* All card */}
        <div className="grid grid-cols-4 gap-5">
          <div className="card card-body bg-base-300 shadow-2xl space-y-4">
            <img src={Demo1} alt="" className="rounded-lg" />
            <h4 className="text-3xl font-semibold">
              Forest: Focus for Productivity
            </h4>
            <div className="flex items-center justify-between">
              <button className="btn flex items-center gap-2">
                <img src={downloadImage} alt="" className="w-4 h-4" /> 9M
              </button>
              <button className="btn flex items-center gap-2">
                <img src={reatingImage} alt="" className="w-4 h-4" /> 5
              </button>
            </div>
          </div>
        </div>

        {/* Link to apps apges */}
        <NavLink
          to={"/apps"}
          className="flex items-center justify-center mt-10"
        >
          <button className="btn bg-purple-500 text-white">All Apps</button>
        </NavLink>
      </div>
    </section>
  );
};

export default TrendingApps;
