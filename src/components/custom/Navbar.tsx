import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useTheme } from "@/providers/theme-providers";

/**
 * UI Components
 */
import { buttonVariants } from "@/components/ui/button";
import { ShinyButton } from "../magicui/shiny-button";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
/**
 * Icons
 */
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { MenuIcon, MoonStarIcon, SunIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  contact: {
    social: {
      Instagram: {
        name: "Instagram",
        url: "#",
        icon: FaInstagram,
      },
      Twitter: {
        name: "Twitter",
        url: "#",
        icon: FaTwitter,
      },
      Facebook: {
        name: "Facebook",
        url: "#",
        icon: FaFacebook,
      },
    },
  },
  theme: {
    dark: {
      name: "dark",
      icon: MoonStarIcon,
    },
    light: {
      name: "light",
      icon: SunIcon,
    },
  },
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex justify-between items-center px-3 w-full p-3">
        <div className="flex items-center justify-start gap-2">
          <ShinyButton className="p-3 rounded-full">
            <MenuIcon className="size-6" />
          </ShinyButton>
          <h1 className="pointer-events-none text-3xl font-bold leading-none">
            Crack My Trip
          </h1>
        </div>
        <div className="flex items-center">
          <TooltipProvider>
            <Dock direction="bottom" className="m-0">
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={social.url}
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full"
                        )}
                      >
                        <social.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      aria-label="Toggle theme"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      {theme === "light" ? (
                        <DATA.theme.light.icon className="size-4" />
                      ) : (
                        <DATA.theme.dark.icon className="size-4" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle theme</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
};

export default Navbar;
