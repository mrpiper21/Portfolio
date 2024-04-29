import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  FaGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/profile.jpg";
import react from "../public/react.jpg";
import Lang from "../public/Lang.jpg";
import consulting from "../public/consulting.png";
import Image from "next/image";
import h1 from "../public/HotelApp/h1.jpg";
import h2 from "../public/HotelApp/h2.jpg";
import h3 from "../public/HotelApp/h3.jpg";
import h4 from "../public/HotelApp/h4.jpg";

import db from "../public/db.jpg";

import A1 from "../public/Attendance/A1.jpg";
import A2 from "../public/Attendance/A2.jpg";
import A3 from "../public/Attendance/A3.jpg";
import A4 from "../public/Attendance/A4.jpg";
import A5 from "../public/Attendance/A5.jpg";
import A6 from "../public/Attendance/A6.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleGitClick = () => {
    window.location.href = "https://github.com/mrpiper21";
  };
  const handleTwitClick = () => {
    window.location.href =
      "https://x.com/Benadpiper?t=FRY9VTzpbKNrN_rlRmu-HA&s=09";
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Welcome</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Bernard Baah
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Welcome to my portfolio website! My name is Bernard but you can
              call me MrPiper. I passionate software developer with a strong
              foundation in Data Structures and Algorithms and a proven track
              record of building innovative and user-friendly software
              solutions. I am also an experienced team player and have a strong
              work ethic. I am confident that I can help you build the software
              solutions that you need to achieve your business goals.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle onClick={handleTwitClick} />
              <AiFillLinkedin />
              <FaGithub onClick={handleGitClick} />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a software developer I have
              collaborated with talanted people to create digital products for
              both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including full fledge
              website and mobile Application.
            </p>
          </div>
          <div className="items-center">
            <h1>Tools</h1>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={Lang}
                width={150}
                height={150}
                alt="Design Image"
                className="rounded-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 tracking-widest ">
                Programming Languages
              </h3>
              <p className="py-2">
                Solving real world problems with the following programming
                languages
              </p>
              <h4 className="py-4 text-teal-600">
                Programming languages i use
              </h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Typscript</p>
              <p className="text-gray-800 py-1">C programming</p>
              <p className="text-gray-800 py-1">Gd script</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={react}
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React Native</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={db}
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">DataBase</h3>
              <p className="py-2">Consistent and dynamic data</p>
              <h1 className="py-4 text-teal-600 font-bold">MongoDB</h1>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a sofware developer, I have
              collaborated with talanted people to create Apps for business and
              customers.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including full pledge
              professional website and mobite application.
            </p>
          </div>

          {/**Church app */}
          <div className="mt-10 items-center justify-center">
            <p className={`${darkMode && "text-white text-2xl font-bold"}`}>
              Attendance App
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={A1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={A2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={A3}
              />
            </div>
          </div>
          {/**Hotel App */}
          <div className="mt-10 items-center justify-center">
            <p className={`${darkMode && "text-white text-2xl font-bold"}`}>
              Hotel Booking App
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={h2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={h1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={h3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={200}
                layout="responsive"
                src={h4}
              />
            </div>
          </div>
          <div>
            <p className={`${darkMode && "text-white text-2xl font-bold"}`}>
              And many more
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
