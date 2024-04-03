import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, signInUserWithGoogle, signOutUser } = useContext(AuthContext);

  return (
    <nav className="bg-blue-50 dark:bg-base-200">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {user ? (
                <li>
                  <NavLink to="/applied">Applied Jobs</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">CareerHub</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-4 px-1 menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="/applied">Applied Jobs</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              className="text-white btn btn-primary"
              onClick={() => signOutUser()}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="text-white btn btn-primary"
              onClick={() => signInUserWithGoogle()}
            >
              Sign In With Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
