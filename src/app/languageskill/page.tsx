import Mainlayout from "@/components/layout/Mainlayout";

const LanguageSkill = () => {
  return (
    <Mainlayout>
      <div className="bg-white">
        <section id="home" className="pt-32 sm:pt-40 md:pt-28">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="relative">
              <div className="relative gap-12 lg:flex">
                <div>
                  <h1 className="text-center font-bold text-5xl sm:text-6xl lg:w-4/8 lg:text-left lg:text-7xl">
                    It's never too late to
                    <br /> start learning.⚡
                  </h1>
                  <br />
                  <p className="text-center text-3xl sm:text-3xl lg:text-left lg:text-3xl">
                    The ultimate Sveltekit Skeleton UI <br />
                    template to build your SaaS startup <br />
                    product in days. Not forever!
                  </p>

                  <div className="text-center text-3xl sm:text-3xl lg:w-9/12 lg:text-left lg:text-3xl">
                    <p className="mt-12 text-lg sm:text-xl">
                      Ship your new SaaS product fast! No overwhelmed on tech
                      stack anymore
                    </p>
                    <p className="flex justify-center items-center mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl"></p>

                    <div className="flex justify-center items-center">
                      <button className="flex flex-col space-y-2 sm:flex-row md:w-max lg:space-y-0">
                        <a
                          href="/"
                          className="relative flex h-9 w-full justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-125"
                        >
                          <span className="relative text-sm font-semibold btn variant-filled-secondary">
                            About Me
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center rounded-3xl mt-12 overflow-hidden sm:mt-12 sm:w-full lg:-mt-6 lg:w-4/12 anim-float-card">
                  <img
                    className="w-full"
                    src="https://sveltekit-saas.pages.dev/images/Roshidere.png"
                    alt="project illustration"
                    style={{ width: "auto" }}
                  />
                  <p className="text-lg sm:text-xl">
                    {/* Ship your waifu✅
                      <br />
                      (Alya Roshidere) */}
                    The Best Waifu✅
                  </p>
                </div>
              </div>

              <div className="relative gap-12 lg:flex"></div>
            </div>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default LanguageSkill;
