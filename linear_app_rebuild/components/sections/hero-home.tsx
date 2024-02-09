import { Button, Highlight } from "../Button";
import { Hero, HeroSubtitle, HeroTitle } from "../Hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HeroHome = () => {
  return (
    <>
      <Hero>
        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
          Linear is a better way
          <br className="hidden md:block" />
          to build products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
          Meet the new standard for modern software development.
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button
          className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
          href="/"
          variant="primary"
          size="large"
        >
          <span>Get Started </span>
          <Highlight>
            <ChevronIcon />
          </Highlight>
        </Button>
        <HeroImage />
      </Hero>
    </>
  );
};
