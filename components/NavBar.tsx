import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NavBarLogoIcon,
  TwitterIcon,
} from "@/components/icons";
import { buttonGradient } from "@/components/primitives";

export const NavBar = () => {
  return (
    <HeroUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <NavBarLogoIcon className="mr-2" color="#9353D3" />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex md:flex lg:flex gap-4 justify-start mr-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Desktop navigation (hidden on small screens) */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} title="Discord">
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={NextLink}
            className={buttonGradient()}
            href={siteConfig.sendEmail}
            size="md"
            startContent={<MailIcon />}
            variant="bordered"
          >
            Contact me
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile navigation (visible only on small screens) */}
      <NavbarContent
        className="sm:hidden basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarItem>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium text-sm",
            )}
            href="/home"
          >
            Home
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium text-sm",
            )}
            href="/resume"
          >
            Resume
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium text-sm",
            )}
            href="/projects"
          >
            Projects
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
