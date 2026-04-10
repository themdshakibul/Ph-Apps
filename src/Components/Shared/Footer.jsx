import playStore from "../../assets/Image/PlayStore.png";
import appStore from "../../assets/Image/AppStor.png";

const Footer = () => {
  return (
    <section>
      <div className="bg-black mt-10">
        <footer className="container mx-auto px-4 text-white py-10 grid md:grid-cols-4 gap-8">
          {/* Logo + Info */}
          <aside>
            <h2 className="text-2xl font-bold text-purple-400">AppStore</h2>
            <p className="mt-2 text-sm text-gray-400">
              Discover, install & manage your favorite apps easily.
            </p>
          </aside>

          {/* App Categories */}
          <nav>
            <h6 className="text-lg font-semibold mb-3">Apps</h6>
            <a className="block link link-hover">Top Apps</a>
            <a className="block link link-hover">Trending</a>
            <a className="block link link-hover">New Releases</a>
            <a className="block link link-hover">Editor's Choice</a>
          </nav>

          {/* Install Info */}
          <nav>
            <h6 className="text-lg font-semibold mb-3">Install</h6>
            <a className="block link link-hover">How to Install</a>
            <a className="block link link-hover">System Requirements</a>
            <a className="block link link-hover">Update Apps</a>
            <a className="block link link-hover">Uninstall Guide</a>
          </nav>

          {/* Download Section */}
          <div className="flex flex-col w-fit flex-wrap justify-center gap-4">
            <button className="btn btn-outline border-gray-400 gap-2 px-8">
              <img src={playStore} alt="Play Store" className="w-5" />
              Google Play
            </button>
            <button className="btn btn-neutral gap-2 px-8">
              <img src={appStore} alt="App Store" className="w-5" />
              App Store
            </button>
          </div>
        </footer>

        {/* Bottom Footer */}
        <div className="text-center text-gray-500 text-sm pb-5">
          © 2026 AppStore. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
