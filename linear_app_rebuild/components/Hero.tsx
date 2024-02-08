interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <>
      <h1 className="text-8xl my-6">{children}</h1>
    </>
  );
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return (
    <>
      <p className="text-xl mb-12">{children}</p>
    </>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <div className="text-center">{children}</div>
    </>
  );
};
