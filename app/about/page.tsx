import React from 'react';
import { Navigation } from "../components/nav";
import { Facebook, Instagram } from "lucide-react";

export default function About() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full p-8 text-white">
                    {/* Section "About Me" */}
                    <h1 className="text-5xl font-bold mb-4 mt-16">About Me</h1>
                    <p className="text-lg max-w-2xl text-center mb-16">
                        I'm Douaa Ataallah, a final-year computer science engineering student from Tunisia, passionate about web development, IoT, and entrepreneurship. I enjoy working on projects that make an impact, and I thrive in environments where I can learn and grow.
                    </p>

                    {/* Section "What I'm working on right now" */}
                    <h1 className="text-4xl font-bold mb-4">What I'm working on right now</h1>
                    <ul className="text-lg max-w-3xl mb-16 list-disc list-inside">
                        <li>
                        Working on a robotic car project focused on navigation, obstacle avoidance, detection, and contextual awareness.                        </li>
                        <li>
                        Freelancing on various projects to expand skills and gain practical experience.                        </li>
                        <li>
                        Learning Spring Boot for building robust web applications and RESTful services.                        </li>
                    </ul>

                    {/* Section "What I've done so far" */}
                    <h1 className="text-4xl font-bold mb-4">What I've done so far</h1>
                    <ul className="text-lg max-w-3xl list-disc list-inside mb-16">
                        <li>
                            Served as an HR representative for my university's <a href="https://www.instagram.com/orbeats.radio.enetcom/" className="text-blue-500 underline">radio club</a> last year, which had 50 members. We organized events and created digital content.
                        </li>
                        <li>
                            Completed a 30-hour Angular bootcamp and received a certification with Croocoder.            </li>

                        <li>
                            Worked on web development projects, including an E-commerce app and an instant website creator, using Angular, Node.js, MongoDB, Django, and PostgreSQL.            </li>
                        <li>Developed an IoT-based animal geolocation system using Arduino, LoRa and GPS modules.
                        </li>
                        <li>I worked on several academic projects in AI and machine learning. I also completed a bootcamp on machine learning.
                        </li>
                        <li>Achieved certification in Azure Data Fundamentals.</li>

                    </ul>

                    {/* Section "What I Do in My Free Time" */}
                    <h1 className="text-4xl font-bold mb-4">What I Do in My Free Time</h1>
                    <ul className="text-lg max-w-3xl list-disc list-inside mb-16">
                        <li>
                            Spending time with family and friends, making the most of every moment with them.            </li>
                        <li>
                            Planning my week ahead to stay organized and ensure I make the most of my time, including setting goals, managing priorities, and scheduling both work and leisure activities.            </li>
                        <li>
                            - Creating content for my Instagram and sharing it primarily in stories to connect with my audience and express my creativity, check out my <a href="https://www.instagram.com/___douaa/" className="text-blue-500 underline">Instagram</a> if you're interested.
                        </li>
                    </ul>

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
