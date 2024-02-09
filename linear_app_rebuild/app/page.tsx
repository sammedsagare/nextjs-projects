import { Button, Highlight } from "@/components/Button";
import { Clients } from "@/components/Clients";
import { Container } from "@/components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";
import { HeroImage } from "@/components/hero-image";
import { ChevronIcon } from "@/components/icons/chevron";

export default function Home() {
  return (
    <>
      <Container className="pt-[6.4rem] pb-[16.4rem] md:pb-[25.6rem]">
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
      </Container>
      <Container>
        <Clients />
      </Container>
    </>
  );
}
