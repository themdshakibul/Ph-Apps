import React, { Children } from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <section>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "btn bg-purple-500 font-semibold text-white" : ""
        }
      >
        {children}
      </NavLink>
    </section>
  );
};

export default MyNavLink;
