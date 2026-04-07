import playStore from "../../assets/Image/PlayStore.png";
import appStore from "../../assets/Image/AppStor.png";
import hederImges from "../../assets/Image/hero.png";

const Heder = () => {
  return (
    <section>
      <div className="min-h-screen bg-base-300 flex flex-col">
        <div className="container mx-auto px-4 pt-16 grow flex flex-col items-center text-center">
          {/* Heder text */}
          <div className="space-y-6 max-w-3xl mb-12">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              We Build <br />
              <span className="text-purple-500">Productive</span> Apps
            </h2>
            <p className="text-lg font-medium opacity-80 leading-relaxed">
              At <span className="font-bold">HERO.IO</span>, we craft innovative
              apps designed to make everyday life simpler, smarter, and more
              exciting. Our goal is to turn your ideas into digital experiences
              that truly make an impact.
            </p>
            {/* button */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-outline border-gray-400 gap-2 px-8">
                <img src={playStore} alt="Play Store" className="w-5" />
                Google Play
              </button>
              <button className="btn btn-neutral gap-2 px-8">
                <img src={appStore} alt="App Store" className="w-5" />
                App Store
              </button>
            </div>
          </div>
        </div>

        {/* heder imge */}
        <div className="w-full mt-auto flex justify-center">
          <img src={hederImges} alt="Header Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Heder;
