/**
 * Landing Page Services Compoenent
 */

/**
 * Utilities
 */
import { Ripple } from "@/components/magicui/ripple";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import aeroplane from "@/assets/videos/aeroplane.mp4";
import hotel from "@/assets/videos/hotel.mp4";
import passport from "@/assets/videos/passport.mp4";
/**
 * UI Components
 */

/**
 * Icons
 */
import {
  FaPlaneDeparture,
  FaHotel,
  FaPassport,
  FaLuggageCart,
} from "react-icons/fa";
import { Calendar } from "@/components/ui/calendar";

const features = [
  {
    Icon: FaPlaneDeparture,
    name: "Flight Tickets",
    description:
      "Get the best deals on domestic and international flights. Hassle-free bookings with top airlines at competitive prices.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={aeroplane} type="video/mp4" />
        </video>
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 brightness-50 z-10" />
      </div>
    ),
  },
  {
    Icon: FaHotel,
    name: "Hotel Booking",
    description:
      "From budget stays to luxury resorts, we find accommodations that match your comfort and budget.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={hotel} type="video/mp4" />
        </video>
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 brightness-50 z-10" />
      </div>
    ),
  },
  {
    Icon: FaPassport,
    name: "International Trips",
    description:
      "Explore the world with our expertly curated international tour packages. Visa assistance, stay, travel—handled from start to finish.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={passport} type="video/mp4" />
        </video>
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 brightness-50 z-10" />
      </div>
    ),
  },
  {
    Icon: FaLuggageCart,
    name: "Custom Tour Packages",
    description:
      "Tell us your dream destination—we’ll craft a fully personalized itinerary just for you, tailored to your time and budget.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export default function Services() {
  return (
    <div>
      <div className="relative flex h-[256px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
        <p className="z-10 whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter capitalize">
          Our Travel Services
        </p>
        <Ripple />
      </div>
      <BentoGrid className="w-7xl mx-auto">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
