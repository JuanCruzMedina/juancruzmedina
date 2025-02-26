import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/ThemeSwitch";
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
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
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

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/*<Link isExternal aria-label="Github" href={siteConfig.links.github}>*/}
        {/*  <GithubIcon className="text-default-500" />*/}
        {/*</Link>*/}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link color="secondary" href={siteConfig.sendEmail} size="lg">
              Send me an email
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              aria-label="Linkedin"
              color="foreground"
              href={siteConfig.links.linkedin}
              size="md"
            >
              <LinkedinIcon className="mr-1" />
              Check my Linkedin
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              aria-label="Github"
              color="foreground"
              href={siteConfig.links.linkedin}
              size="md"
            >
              <GithubIcon className="mr-1" />
              or my Github
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
