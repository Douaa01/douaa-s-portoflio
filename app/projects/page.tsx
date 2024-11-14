// pages/projects.js
import React from 'react';
import { Navigation } from "../components/nav";
import { Facebook, Instagram } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Web Application Development',
            date: 'September, 2024',
            description: 'I developed an e-commerce web application that provides a seamless user experience with interactive pages for browsing products, placing orders, and managing user accounts. An admin interface streamlines inventory and order management, ensuring efficient tracking and ease of use.',
            
        },
        {
            id: 2,
            title: 'Instant Website Creation Application',
            date: 'June, 2024',
            description: 'I collaborated with a team to create an instant website builder that allows users to design websites effortlessly using customizable templates and a drag-and-drop interface. Our work included user management and efficient content handling, providing easy options for adding, saving, and retrieving text, images, and videos.',
            
        },
        {
            id: 3,
            title: 'Animal Geolocation Application, IoT Project',
            date: 'March, 2024',
            description: 'I developed an IoT-based animal geolocation application that includes an interface for viewing animals in real-time, accessible through login. The project involved integrating geolocation devices using Arduino, GPS, and LoRa modules. It also features pages for login, registration, and animal management with complete CRUD capabilities.',
            
        },
        {
          id: 4,
          title: 'Brain tumor detection ',
          date: 'April, 2024',
          description: 'I developed a brain tumor detection system, involving data preparation, model building, and evaluation. The project included importing and preprocessing medical data, building and training a detection model, and evaluating its performance using metrics like accuracy, loss curves, and a confusion matrix',
          
      },
      {
        id: 5,
        title: 'Stock Management, Full-Stack Web Development',
        date: 'August, 2023',
        description: 'I developed a full-stack web application for stock management, featuring a user-friendly interface and a backend for efficient data handling. The project included seamless integration between the frontend and backend, utilizing a REST API for data management and a local server setup for testing and development.',
        
    },
    ];

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full p-8 text-white">
                    <h1 className="text-5xl font-bold mb-4 mt-16">Projects</h1>
                    <p className="text-lg max-w-2xl text-center mb-16">
                        Some of the projects are from work and some are on my own time.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-zinc-800 p-6 rounded-lg shadow-lg">
                                <p className="text-sm text-zinc-400">{project.date}</p>
                                <h2 className="text-2xl font-bold mt-2">{project.title}</h2>
                                <p className="mt-4">{project.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Section "Get in Touch" */}
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg max-w-2xl text-center mb-4">
                        I'm always open to new opportunities and collaborations, so feel free to reach out to me.
                    </p>
                    <a href="mailto:ataallahdouaa@gmail.com" className="bg-white text-black px-6 py-3 rounded-full font-bold mb-8 inline-block">
                        Contact me ✉️
                    </a>

                    <p className="text-lg max-w-2xl text-center mb-8">
                        If you're interested in checking out my other socials, you can find them here:
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/douaa.ataallah/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/___douaa/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


/* import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}*/
