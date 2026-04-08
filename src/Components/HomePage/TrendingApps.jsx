import reatingImage from "../../assets/Image/icon-ratings.png";
import downloadImage from "../../assets/Image/icon-downloads.png";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoadig] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/AppData.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoadig(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="container mx-auto px-2">
        <header className="space-y-3 text-center mb-10">
          <h2 className="text-5xl font-bold">Trending Apps</h2>
          <p className="font-semibold ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </header>
        {loading ? (
          <div className="flex items-center justify-center h-100">
            <DotLoader color="#7945e9" />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-10">
            {apps.slice(0, 8).map((app) => (
              <NavLink
                to={"/"}
                key={app.id}
                className="card flex flex-col h-full card-body bg-base-200 border border-gray-300 hover:border-cyan-500 space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-cyan-100 cursor-pointer"
              >
                <img
                  src={app.image}
                  alt={app.companyName}
                  className="rounded-3xl w-full"
                />

                <h4 className="text-3xl font-semibold">{app.title}</h4>

                <div className="flex items-center justify-between mt-auto pt-4">
                  <button className="btn flex items-center gap-2 text-green-500">
                    <img src={downloadImage} alt="" className="w-4 h-4" />
                    {app.downloads}
                  </button>
                  <button className="btn flex items-center gap-2 text-orange-500">
                    <img src={reatingImage} alt="" className="w-4 h-4" />
                    {app.ratingAvg}
                  </button>
                </div>
              </NavLink>
            ))}
          </div>
        )}
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
