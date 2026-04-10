import { useParams } from "react-router";
import UseData from "../../Components/Hooks/UseData";
import { DotLoader } from "react-spinners";

import downloadImage from "../../assets/Image/icon-downloads.png";
import reatingImage from "../../assets/Image/icon-ratings.png";
import reviewImages from "../../assets/Image/icon-review.png";
import { useContext } from "react";
import { InstallAppContext } from "../../Context/InstallProveider";
import { toast } from "react-toastify";

const AppDeetails = () => {
  const { id } = useParams();
  const { apps, loading } = UseData();
  const expectedApps = apps.find((app) => String(app.id) === id);

  const { installApp, setInstallApp } = useContext(InstallAppContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-100">
        <DotLoader color="#7945e9" />
      </div>
    );
  }

  const handelInstallApps = () => {
    const alreadyInstalled = installApp.find(
      (app) => app.id === expectedApps.id,
    );

    if (alreadyInstalled) {
      toast.error(`${expectedApps.title} already installed!`);
      return;
    }

    setInstallApp([...installApp, expectedApps]);
    toast.success(`${expectedApps.title} is installed!`);
  };

  return (
    <section>
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 border-b pb-5 border-gray-300">
          {/* App Icon */}
          <div className="bg-base-300 p-5 rounded-2xl">
            <img
              src={expectedApps.image}
              alt={expectedApps.title}
              className="w-64 h-64 rounded-3xl object-cover"
            />
          </div>

          <div className="flex-1 w-full">
            <div className="mb-6 space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {expectedApps.title}
              </h2>
              <p className="text-lg text-success font-medium">
                {expectedApps.companyName}
              </p>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Stats Grid */}
            <div className="flex flex-wrap items-center gap-10 md:gap-20 mb-8 text-center">
              <div className="">
                <img
                  src={downloadImage}
                  alt="Downloads"
                  className="mx-auto mb-2 h-6 w-6"
                />
                <h4 className="text-xs uppercase tracking-wider text-gray-500">
                  Downloads
                </h4>
                <p className="text-2xl font-bold">{expectedApps.downloads}</p>
              </div>

              <div className="">
                <img
                  src={reatingImage}
                  alt="Rating"
                  className="mx-auto mb-2 h-6 w-6"
                />
                <h4 className="text-xs uppercase tracking-wider text-gray-500">
                  Rating
                </h4>
                <p className="text-2xl font-bold">{expectedApps.ratingAvg} ★</p>
              </div>

              <div className="">
                <img
                  src={reviewImages}
                  alt="Reviews"
                  className="mx-auto mb-2 h-6 w-6"
                />
                <h4 className="text-xs uppercase tracking-wider text-gray-500">
                  Reviews
                </h4>
                <p className="text-2xl font-bold">{expectedApps.reviews}</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col gap-4 w-fit">
              <button
                onClick={handelInstallApps}
                className="btn btn-success btn-lg px-10 font-bold text-white shadow-md hover:shadow-lg transition-all"
              >
                Install Now ({expectedApps.size} MB)
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          <h2 className="text-3xl font-bold">Description</h2>
          <p>{expectedApps.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AppDeetails;
