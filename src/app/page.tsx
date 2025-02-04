"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Star = {
  top: string;
  left: string;
  size: string;
  animationDuration: string;
};

export default function Home() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isDesktop = !isMobile;

  useEffect(() => {
    const generateStars = () => {
      return [...Array(45)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 1}px`,
        animationDuration: `${Math.random() * 15 + 30}s`,
      }));
    };
    setStars(generateStars());
  }, []);
  return (
    <>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="-z-50 absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            x: [0, 350, -350, 200, -200, 0],
            y: [0, -350, 350, -200, 200, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-start text-center">
        <div className="flex flex-row items-center justify-between px-4 sm:px-10 w-full h-fit">
          {isDesktop && (
            <>
              <Image
                src="/siam-white.png"
                alt="siam logo"
                width={300}
                height={300}
                className="-mt-[3.25rem]"
              />
              <Image
                src="/logo.png"
                alt="coding relay logo"
                height={250}
                width={250}
              />
            </>
          )}
          {isMobile && (
            <>
              <Image
                src="/siam-white.png"
                alt="siam logo"
                width={140}
                height={140}
                className="-mt-[2.15rem]"
              />
              <Image
                src="/logo.png"
                alt="coding relay logo"
                height={115}
                width={115}
                className="-mr-4"
              />
            </>
          )}
        </div>
        <div className="w-fit h-auto">
          <h1 className="sm:text-[7.5rem] text-[2.7rem] sm:-mt-16 -mt-6">
            Coding Relay
          </h1>
        </div>
        <div className="w-auto h-auto mt-5">
          <h3 className="sm:text-2xl mb-10 text-xl">
            Fill the form below <br className="sm:hidden visible" /> to create
            your team.
          </h3>
          <div className="z-50 sm:w-[740px] w-[350px] sm:h-[3570px] h-[3770px] bg-white mb-7 rounded-xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdv_XO0BYSfunSEB9pqb62P5K3DYudQlVD8Ozd9V-lBf6DEWg/viewform?embedded=true"
              className="sm:w-[740px] sm:h-[3570px] w-[350px] h-[3770px]"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
