import Link from "next/link";
import { Logo } from "./icons/Logo";
import { Container } from "./Container";
import { Button } from "./Button";

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
        <Container className="flex h-[var(--navigation-height)]">
          <Link className="flex items-center text-md" href="/">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
          </Link>

          <nav className="h-full">
            <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6">
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li>
                <Link href="#">Customers</Link>
              </li>
              <li>
                <Link href="#">Changelog</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto h-full flex items-center">
            <Link className="text-sm mr-6" href="#">
              Log in
            </Link>
            <Button href="#" variant="primary">
              Sign Up
            </Button>
          </div>
        </Container>
      </header>
    </>
  );
};
