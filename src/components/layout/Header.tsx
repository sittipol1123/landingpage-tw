"use client";
import Drawerheader from "./Drawerheader";
import Link from "next/link";
import { useState, useEffect } from "react";

const appTitle = "STEP TO DO IT";

const Header = () => {
  const [data, setData] = useState<boolean>(false);
  useEffect(() => {
    setData(true);
  }, []);
  return (
    <>
      <Drawerheader apptitle={appTitle}></Drawerheader>
      <nav
        id="navbar"
        className="fixed h-14 top-0 inset-x-0 z-20 w-full light:border-b light:border-gray-100 light:bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80"
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          {/* default lg:py in relative class = 4 */}
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                href="/"
                className="text-xl uppercase nav-link flex items-center space-x-2"
              >
                {appTitle}
              </Link>

              <button
                aria-label="humburger"
                id="hamburger"
                className="relative -mr-6 p-6 lg:hidden"
                // onClick={() => togglenav()}
                data-drawer-target="drawer-example"
                data-drawer-show="drawer-example"
                aria-controls="drawer-example"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
              </button>
            </div>

            <div
              aria-hidden="true"
              id="layer"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"
            ></div>
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent"
            >
              <div className="dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 text-base tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  <li>
                    <Link
                      href={"/"}
                      className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4"
                    >
                      <span>Homepage</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4"
                    >
                      <span>About Me</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/languageskill"
                      className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4"
                    >
                      <span>Language Skill</span>
                    </Link>
                  </li> */}

                  {/* <li>
                    <a
                      href="/#features"
                      className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4"
                    >
                      <span>Features</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4"
                    >
                      <span>Pricing</span>
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* <button className="btn btn-sm variant-ghost-surface">
                <a href="/login">
                  <span className="relative text-sm font-semibold lg:text-primary lg:dark:text-white">
                    Login
                  </span>
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
