import { useState, useEffect } from "react";
/**
 * Landing Page
 */
import Navbar from "@/components/custom/landing/Navbar";
import TopDestination from "@/components/custom/landing/TopDestination";
/**
 * Utilities
 */
import { getPhotos } from "@/utils/unsplash";
import bg from "@/assets/img/bg/boat-in-mountain.jpg";
/**
 * Components
 */
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Globe } from "@/components/magicui/globe";

/**
 * The Landing page component.
 *
 * This component is the main entry point to the Sampatti application.
 * It renders the main navigation bar and the main content area.
 *
 * @returns The Landing page component.
 */
const Landing = () => {
  const [image, setImage] = useState(bg);
  useEffect(() => {
    const fetchPhoto = async () => {
      const photo = await getPhotos("mountains");
      if (photo != null) {
        setImage(photo);
      }
    };
    fetchPhoto();
  }, []);
  return (
    <>
      <div className="flex flex-col transition-all duration-300">
        <div className="relative min-h-screen">
          {/* Background image layer */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center brightness-100 dark:brightness-50 transition-all duration-300"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Content layer */}
          <div className="relative z-10">
            <Navbar />
            {/* Hero Section */}
            <div className="grid grid-cols-2 gap-2 mx-auto w-10/12 min-h-[calc(100vh-8rem)] backdrop-blur-sm p-5 rounded-3xl hover:shadow-lg transition-all duration-300">
              {/* Text Div */}
              <div className="size-full flex flex-col items-start justify-center overflow-hidden gap-4">
                <div className="capitalize">
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-6xl font-semibold">
                      Discover{" "}
                      <span className="text-7xl text-[#91C8E4]">Your</span>
                    </p>
                  </BoxReveal>
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-6xl font-semibold">
                      Your Next
                      <span className="text-7xl text-[#91C8E4]">
                        {" "}
                        destination
                      </span>
                    </p>
                  </BoxReveal>
                </div>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h2 className="mt-[.5rem] text-2xl">
                    Unforgettable journeys. Hand-picked destinations.
                    <p className="text-[#91C8E4]">
                      Trusted by thousands of travelers.
                    </p>
                  </h2>
                </BoxReveal>
                <RainbowButton className="text-[18px] hover:text-[16px] duration-500">
                  Explore Packages
                </RainbowButton>
              </div>
              {/* Globe Div */}
              <div className="relative flex w-full justify-center overflow-hidden rounded-lg px-40 pb-40 md:pb-60">
                <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 capitalize">
                  Go Beyond Your Dreams
                </span>
                <Globe className="top-16 scale-110" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </div>
          </div>
        </div>
        {/* Top Destination */}
        <div>
          <TopDestination />
        </div>
      </div>
    </>
  );
};

export default Landing;
