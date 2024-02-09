import { Supercell } from "./logos/supercell";
import { ArcLogo } from "./logos/arc";
import { CashAppLogo } from "./logos/cashapp";
import { DescriptLogo } from "./logos/descript";
import { HEXLogo } from "./logos/hex";
import { MercuryLogo } from "./logos/mercury";
import { RemoteLogo } from "./logos/remote";
import { RunwayLogo } from "./logos/runway";
import { RampLogo } from "./logos/ramp";
import { RaycastLogo } from "./logos/raycast";
import { RetoolLogo } from "./logos/retool";
import { VercelLogo } from "./logos/vercel";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        Powering the world’s best product teams.
      </span>
      <br className="hidden md:block" /> From next-gen startups to established
      enterprises.
    </p>

    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <RampLogo />
      <HEXLogo className="hidden md:block" />
      <VercelLogo />
      <DescriptLogo className="hidden md:block" />
      <CashAppLogo />
      <Supercell />
      <MercuryLogo />
      <RetoolLogo />
      <RemoteLogo className="hidden md:block" />
      <ArcLogo className="hidden md:block" />
      <RaycastLogo className="hidden md:block" />
      <RunwayLogo className="hidden md:block" />
    </div>
  </>
);
