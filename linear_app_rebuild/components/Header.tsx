"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/Logo"; // Fix: Changed the import statement to match the actual file name

import classNames from "classnames";

export const Header = () => {
  const [hamIsOpen, setHamIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamIsOpen);
  }, [hamIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamIsOpen]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 ",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden sm:block">
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
        </div>

        <div className="ml-auto flex h-full items-center">
          <Link className="mr-6 text-sm" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
