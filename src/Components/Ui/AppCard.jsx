import reatingImage from "../../assets/Image/icon-ratings.png";
import downloadImage from "../../assets/Image/icon-downloads.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <div>
      <Link
        to={`/apps/${app.id}`}
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
      </Link>
    </div>
  );
};

export default AppCard;
