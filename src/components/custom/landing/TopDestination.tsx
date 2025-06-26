/**
 * The `TopDestination` component is a React functional component that returns JSX
 */
/**
 * The `TopDestination` component is a React functional component that returns JSX
 */
import { Marquee } from "@/components/magicui/marquee";
import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";

/**
 * The `TopDestination` Places list is a React functional component that returns JSX
 */
import { PLACES } from "@/pages/landing/places";

/**
 * A marquee of review cards, with a gradient background and a div to simulate
 * a left and right border.
 *
 * @returns A JSX element containing a div with a marquee of review cards.
 */
const TopDestination = () => {
  console.log(PLACES);
  return (
    <>
      <div>
        <div className="relative flex h-[256px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
          <p className="z-10 whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter capitalize">
            Top Destination
          </p>
          <Ripple />
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:32s]">
            {PLACES.map((place, key) => (
              <Card
                key={key}
                className="p-0 max-w-sm w-full shadow-none border-none rounded-lg"
              >
                <MagicCard className="p-0 h-full">
                  <CardContent className="p-2">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="rounded-lg object-cover h-64 w-full"
                    />
                  </CardContent>
                  <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <CardTitle className="text-xl">{place.name}</CardTitle>
                        <CardDescription className="text-base">
                          {place.description}
                        </CardDescription>
                      </div>
                      <Button>Explore</Button>
                    </div>
                  </CardFooter>
                </MagicCard>
              </Card>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </>
  );
};

export default TopDestination;
