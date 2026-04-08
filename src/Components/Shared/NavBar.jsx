import { NavLink } from "react-router";
import navLogo from "../../assets/Image/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const NavBar = () => {
  const navItems = [
    {
      path: "/",
      text: "HomePage",
    },
    {
      path: "/apps",
      text: "AllApps",
    },
    {
      path: "/inistallation",
      text: "InstalledPage",
    },
  ];

  return (
    <section>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto px-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <div>
                  {navItems.map((nav, ind) => (
                    <MyNavLink key={ind} to={nav.ptah}>{nav.text}</MyNavLink>
                  ))}
                </div>
              </ul>
            </div>
            <img src={navLogo} alt="Nav Images" className="w-10" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  gap-10 items-center font-semibold">
              {navItems.map((nav, ind) => (
                <MyNavLink key={ind} to={nav.path}>{nav.text}</MyNavLink>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn bg-purple-500 font-semibold text-white">
              <FaGithub /> Contribute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
