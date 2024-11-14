import Link from "next/link";
import React from "react";
import Head from "next/head";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Douaa's Portfolio</title>
        <meta name="description" content="Douaa Ataallah's personal portfolio page." />
      </Head>

      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex flex-col items-center justify-center relative">

        {/* Navigation */}
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-10"> {/* Augmenter gap pour plus d'espace entre les liens */}
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xl duration-500 text-zinc-500 hover:text-zinc-300 " // text-lg ou text-xl pour augmenter la taille du texte
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        {/* Image */}
        <div style={{ textAlign: 'center' }} className="animate-fade-in">
          <img
            src="/image00001 (1).jpeg"
            alt="Description de l'image"
            width="300"
            height="250"
            className="rounded-md" // Example of Tailwind utility classes
          />
        </div>

        {/* Particles Background */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        {/* Name with Animation */}
        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Douaa Ataallah
        </h1>

        {/* Description */}
        <div className="mt-6 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            Computer Science Engineering Student
          </h2>
          <h3 className="text-sm text-zinc-500">
            Passionate about <strong className="text-white">web development, robotics</strong>, and <strong className="text-white">AI</strong>.
          </h3>
        </div>

        {/* Personal Introduction */}
        <div className="mt-6 flex items-center justify-center text-center animate-fade-in">
          <h2 className="text-xl text-zinc-400 p-4 max-w-3xl">
            I'm a final-year computer engineering student from Tunisia with a passion for web development, IoT, and entrepreneurship. I enjoy learning new technologies and applying them to solve real-world problems. I'm eager to contribute to exciting projects, work with motivated teams, and create impactful solutions that make a difference.
          </h2>
        </div>
      </div>


    </div>
  );
}
