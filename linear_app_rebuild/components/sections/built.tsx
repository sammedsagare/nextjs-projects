import { Button, Highlight } from "../Button";
import { Hero, HeroSubtitle, HeroTitle } from "../Hero";
import { ChevronIcon } from "../icons/chevron";
import { WindowsIcon } from "../icons/windows";

export const Built = () => {
  return (
    <>
      <Hero>
        <img
          src="/linearLogo.avif"
          alt="Your Alt Text"
          className="mx-auto mb-4 w-[170px] h-auto" // Center the image using mx-auto and add margin-bottom
        />

        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
          Built for the future.
          <br className="hidden md:block" />
          Available today.
        </HeroTitle>

        <Button
          className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem] mt-16"
          href="/"
          variant="primary"
          size="large"
        >
          <span>Sign up for free </span>
        </Button>

        <Button
          className="ml-5 animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
          href="/"
          variant="secondary"
          size="large"
        >
          <span>Download</span>
        </Button>
      </Hero>
    </>
  );
};
