import { Container } from "@/components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <header>
          {" "}
          <Container>header</Container>
        </header>
        <main>
          <Container>
            <Hero>
              <HeroTitle>
                Linear is a better way
                <br />
                to build products
              </HeroTitle>
              <HeroSubtitle>
                Meet the new standard for modern software development.
                <br />
                Streamline issues, sprints, and product roadmaps.
              </HeroSubtitle>
              <img
                className="rounded-lg"
                src="/img/hero.webp"
                alt="hero image"
              />
            </Hero>
          </Container>
        </main>
        <footer>
          <Container>footer</Container>
        </footer>
      </div>
    </>
  );
}
