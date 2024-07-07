import Mainlayout from "@/components/layout/Mainlayout";
import Image from "next/image";

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
      <div className="light:bg-white dark:bg-black h-full">
        <section id="aboutme" className="pt-32 sm:pt-40 md:pt-28 pb-8">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="items-center relative lg:w-12/12">
              {/* <img
                src="https://sveltekit-saas.pages.dev/images/Roshidere.png"
                style={{ margin: "auto", maxHeight: 300 }}
              /> */}
              <Image
                className="w-full"
                src="/images/Roshidere.png"
                alt="project illustration"
                width={600}
                height={600}
                style={{ margin: "auto", maxHeight: 300, width: "auto" }}
              />
            </div>
            <div className="lg:w-12/12">
              <p className="text-xl font-bold">Introduce Yourself</p>
              <hr />
              <br />
              <p>
                &emsp;Hello, I&apos;m Aum. I have a total of 1.8 years of
                experience in programming. I am able to create projects and
                close them. I have been working with cms and salepage systems
                for 1 year. The system was developed with the laravel framework.
                Before moving to work writing nextjs, express, arduino, I was
                given the requirements: To make a system that can view device
                information whether the device is online or offline, I wrote an
                arduino program. To flash the device to send values from the
                device to the system and write a service to receive data. from
                the device to store on the server I like challenges I like to
                find new knowledge around me. I like to learn new things.
                Don&apos;t like to stay in one place. Which I think I can be a
                force for the team. or your company Nice to meet you and thank
                you.{" "}
              </p>
              <br />
              <div className="relative gap-12 lg:flex">
                <div className="relative lg:w-6/12">
                  <p className="text-xl font-bold">My Skill Language</p>
                  <hr />
                  <br />
                  <p>
                    - HTML <br />
                    - Javascript <br />
                    - CSS <br />
                    - Python <br />
                    - Arduino C++ <br />
                    - Typescript <br />
                    - SQL <br />- PHP
                  </p>
                </div>
                <div className="relative lg:w-6/12">
                  <p className="text-xl font-bold">My Skill Framework EXP</p>
                  <hr />
                  <br />
                  <p>
                    - Laravel 8 with Eloquent (1 year) <br />
                    - Nextjs Typescript 13, 14 (8 month) <br />
                    - Arduino C++ and MQTT (8 month) <br />
                    - Node js Express js ts (8 month) <br />
                    - Prisma (3 month) <br />
                    - Sequelize (5 month) <br />- Graphql (1 month basic CRUD)
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-center mt-5 mb-5">
                <p className="text-lg sm:text-xl font-bold">Example Project</p>
              </div>
              <div className="relative gap-12 lg:flex">
                <div className="grid grid-cols-2 lg:w-12/12 md:grid-cols-3 gap-4 ">
                  {frmdata.map((val, key) => {
                    return (
                      <div key={key}>
                        <Image
                          src={val.images}
                          alt={val.title}
                          width={500}
                          height={500}
                        />
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              {val.title}
                            </div>
                            <p className="text-base light:text-gray-700 dark:text-white">
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
