import React, { useContext } from "react";
import { InstallAppContext } from "../../Context/InstallProveider";

import downloadImage from "../../assets/Image/icon-downloads.png";
import reatingImage from "../../assets/Image/icon-ratings.png";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router";

const InstalledPage = () => {
  const { installApp, setInstallApp } = useContext(InstallAppContext);

  const handelUnstall = (uApp) => {
    const unstallApp = installApp.filter((iApp) => iApp.id != uApp.id);
    setInstallApp(unstallApp);
    toast.warning(`${uApp.title} is Unstalled!`);
  };

  return (
    <section>
      <div className="container mx-auto px-2 mt-10">
        <header className="space-y-3 text-center">
          <h2 className="text-4xl font-bold">Your Installed Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </header>

        {installApp.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center space-y-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
              alt="No Apps"
              className="w-32 opacity-70"
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
              No Apps Installed 😔
            </h2>

            <p className="text-gray-400 max-w-md">
              You haven't installed any apps yet. Browse apps and install your
              favorite ones to see them here.
            </p>

            <NavLink to={"/apps"}>
              <button className="btn bg-purple-600 border-none text-white px-6">
                Browse Apps 🚀
              </button>
            </NavLink>
          </div>
        ) : (
          <div className="space-y-5 mt-10 px-2">
            {installApp.map((install, ind) => (
              <div key={ind}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-base-300 p-4 md:p-6 rounded-2xl hover:border hover:border-gray-400 hover:shadow-xl transition-all gap-6">
                  {/* Left Section: Image and Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 w-full md:w-auto text-center sm:text-left">
                    {/* App Icon Container */}
                    <div className="p-4 bg-base-300 rounded-2xl shadow-lg shrink-0">
                      <img
                        src={install.image}
                        alt={install.title}
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                      />
                    </div>

                    {/* Text & Stats */}
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {install.title}
                      </h3>

                      {/* Stats Buttons - Wrapped for small screens */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                        <div className="badge badge-lg py-4 flex gap-2 text-green-500 bg-white/10 border-none">
                          <img src={downloadImage} alt="" className="w-4 h-4" />
                          {install.downloads}
                        </div>

                        <div className="badge badge-lg py-4 flex gap-2 text-orange-500 bg-white/10 border-none">
                          <img src={reatingImage} alt="" className="w-4 h-4" />
                          {install.ratingAvg}
                        </div>

                        <div className="badge badge-lg py-4 bg-white/10 border-none">
                          {install.size} MB
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handelUnstall(install)}
                    className="btn btn-success btn-block md:btn-md md:w-auto text-white font-bold px-8"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InstalledPage;
