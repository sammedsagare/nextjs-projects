import { HeroHome } from "@/components/sections/hero-home";
import { Clients } from "@/components/sections/Clients";
import { Container } from "@/components/Container";
import { StarsIllustration } from "@/components/icons/starts_illustration";
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool";
import classNames from "classnames";
import { EnjoyIssueTracking } from "@/components/sections/enojoy-issue-tracking";
import { BuildMomentum } from "@/components/sections/build-momentum";
import { SetDirection } from "@/components/sections/set-directions";
import { LinearWorkflow } from "@/components/sections/linear-workflows";
import { Built } from "@/components/sections/built";

export default function Home() {
  return (
    <>
      <Container className="pt-[6.4rem] pb-[16.4rem] md:pb-[25.6rem]">
        <HeroHome />
      </Container>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <UnlikeAnyTool />
      </Container>
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
      <LinearWorkflow />
      <div
        className={classNames(
          "rotate-180 mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Built />
    </>
  );
}
