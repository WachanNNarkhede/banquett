"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../../components/ui/resizable-navbar";
import { useState } from "react";

const colors = {
  darkNavy: "#0A1428",
  navy: "#1A2A44",
  gold: "#D4A017",
  lightGold: "#E6B422",
  cream: "#F8F4E8",
  champagne: "#F5E6C8",
};

export default function Navbarr() {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 left-0 right-0 z-50" style={{ background: colors.darkNavy }}>
        {/* Desktop Navigation */}
        <NavBody className="max-w-7xl mx-auto px-6">
          <NavbarLogo className="text-2xl font-bold" style={{ color: colors.gold, fontFamily: "'Cinzel', serif" }}>
            Luxe Banquet Hall
          </NavbarLogo>
          <NavItems
            items={navItems}
            className="text-lg"
            style={{ color: colors.champagne }}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex items-center gap-4">
          
            <NavbarButton variant="primary" style={{ background: colors.gold, color: colors.darkNavy }}>
              Book a Call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="max-w-7xl mx-auto px-6">
            <NavbarLogo className="text-2xl font-bold" style={{ color: colors.gold, fontFamily: "'Cinzel', serif" }}>
              Luxe Banquet Hall
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: colors.gold }}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            style={{ background: colors.navy }}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-lg"
                style={{ color: colors.champagne }}
              >
                <span className="block py-2">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                style={{ background: colors.gold, color: colors.darkNavy }}
              >
                Book a Call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}