import UseData from "../../Components/Hooks/UseData";
import { DotLoader } from "react-spinners";
import AppCard from "../../Components/Ui/AppCard";
const AllApps = () => {
  const { apps, loading } = UseData();
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
            {apps.map((app, ind) => (
              <AppCard key={ind} app={app} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllApps;
