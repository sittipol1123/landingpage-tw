import Mainlayout from "@/components/layout/Mainlayout";

const frmdata = [
  {
    title: "Solar Street Light Mornitor",
    images: "/images/Screenshot 2024-03-20 110303.png",
    description:
      "This is solar street light mornitor system. This is a system that checks street lamp information to see if the lamp has a problem or not so that the service team can analyze it before going out to correctly fix the problem at the job site.",
  },
  {
    title: "CCTV Issue Mornitor",
    images: "/images/Screenshot 2024-03-20 113443.png",
    description:
      "This system is a system that checks the voltage of CCTV cameras in order to find the basic cause of camera errors before sending the service team out to fix them.",
  },
  {
    title: "CMS and Landingpage",
    images: "/images/image.png",
    description:
      "It is a content management system for use in sales. Advertising or measuring web traffic using Google Analysis",
  },
];

const Aboutme = () => {
  return (
    <Mainlayout>
      <div className="bg-white">
        <section id="aboutme" className="pt-32 sm:pt-40 md:pt-28 pb-8">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="items-center relative lg:w-12/12">
              <img src="https://sveltekit-saas.pages.dev/images/Roshidere.png" style={{ margin: "auto", maxHeight: 300 }} />
            </div>
            <div className="lg:w-12/12">
                data
            </div>
            <div className="relative">
              <div className="text-center mt-5 mb-5">
                <p className="text-lg sm:text-xl font-bold">Example Project</p>
              </div>
              <div className="relative gap-12 lg:flex">
                <div className="grid grid-cols-2 lg:w-12/12 md:grid-cols-3 gap-4">
                  {frmdata.map((val, key) => {
                    return (
                      <div key={key}>
                        <img src={val.images} alt="" />
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              {val.title}
                            </div>
                            <p className="text-gray-700 text-base">
                              {val.description}
                            </p>
                          </div>
                          {/* <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #photography
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #travel
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #winter
                            </span>
                          </div> */}
                        </div>
                      </div>
                    );
                  })}
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

export default Aboutme;
