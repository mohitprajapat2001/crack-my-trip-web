import { useState, useEffect } from "react";
/**
 * Landing Page
 */
import Navbar from "@/components/custom/Navbar";
/**
 * Utilities
 */
import { getPhotos } from "@/utils/unsplash";
import bg from "@/assets/img/bg/boat-in-mountain.jpg";
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
            className="absolute inset-0 z-0 bg-cover bg-center brightness-100 dark:brightness-50"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Content layer */}
          <div className="relative z-10">
            <Navbar />
            {/* Add other content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
