import "@/styles/globals.css";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { HeartFilledIcon, ShopIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import { useState } from "react";
import { LoginModal } from "@/components/Modals/Login";
import { RegisterModal } from "@/components/Modals/Register";

import { ProfileDropdown } from "@/components/Dropdowns/ProfileDropdown";

export const Navbar = () => {
  const [modalState, setModalState] = useState({
    register: false,
    login: false,
  });

  const openRegisterModal = () =>
    setModalState({ register: true, login: false });
  const openLoginModal = () => setModalState({ register: false, login: true });
  const closeModals = () => setModalState({ register: false, login: false });

  return (
    <HeroUINavbar
      isBlurred={true}
      maxWidth="xl"
      position="sticky"
      style={{ fontFamily: "Quick, sans-serif", backgroundColor: "#c0172b" }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <span >
              <Logo />
            </span>
            <p
              className="font-bold text-inherit hidden sm:block"
              style={{ color: "#f0f0f0" }}
            >
              KUMIHO
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex gap-8 justify-center ml-2 flex-1"
        justify="center"
      >
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-[#0c0c0c]  text-[#f0f0f0]"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* Registro / Inicio sesión */}
        <NavbarItem>
          <ProfileDropdown
            onRegister={openRegisterModal}
            onLogin={openLoginModal}
          />
        </NavbarItem>

        {/* Carrito de compras  */}
        <NavbarItem className="hidden sm:flex gap-4">
          <Link href={siteConfig.links.cart} title="Shop">
            <ShopIcon className="text-[#f0f0f0] hover:text-[#0c0c0c]" />
          </Link>
        </NavbarItem>

        {/* Lista de deseos  */}
        <NavbarItem className="hidden sm:flex gap-4">
          <Link href={siteConfig.links.wishlist} title="Shop">
            <HeartFilledIcon className="text-[#f0f0f0] hover:text-[#0c0c0c]" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      {modalState.register && (
        <RegisterModal
          isOpen={modalState.register}
          onClose={closeModals}
          onOpenLoginModal={() => {
            setModalState({ register: false, login: true });
          }}
        />
      )}
      {modalState.login && (
        <LoginModal isOpen={modalState.login} onClose={closeModals} onOpenRegisterModal={function (): void {
          throw new Error("Function not implemented.");
        } } />
      )}
    </HeroUINavbar>
  );
};
