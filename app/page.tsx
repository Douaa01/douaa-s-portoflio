import Link from "next/link";
import React from "react";
import Head from "next/head";
import Particles from "./components/particles";
import "/global.css"; // Import global CSS directly without assigning it to a variable

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      {/* Add metadata directly in this page */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Douaa's Portfolio</title>
        <meta name="description" content="Douaa Ataallah's personal portfolio page." />
      </Head>

      <div className="container">
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          
          {/* Navigation */}
          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Image */}
          <div style={{ textAlign: 'center' }} className="animate-fade-in">
            <img src="/image00001 (1).jpeg" alt="Description de l'image" width="300" height="250" />
          </div>

          {/* Glowing Line (Hidden on small screens) */}
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          
          {/* Particles Background */}
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />

          {/* Name */}
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
            Douaa Ataallah
          </h1>

          {/* Glowing Line (Hidden on small screens) */}
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          {/* Description */}
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500">
              Computer Science Engineering Student
            </h2>
            <h3 className="text-sm text-zinc-500">
              Passionate about <strong className="text-white">web development, robotics</strong>, and <strong className="text-white">AI</strong>.
            </h3>
            
            {/* Personal Introduction */}
            <div className="flex-grow flex items-center justify-center animate-fade-in">
              <h2 className="text-xl text-zinc-400 p-4 max-w-3xl text-center">
                I'm a final-year computer engineering student from Tunisia with a passion for web development, IoT, and entrepreneurship. I enjoy learning new technologies and applying them to solve real-world problems. I'm eager to contribute to exciting projects, work with motivated teams, and create impactful solutions that make a difference.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
