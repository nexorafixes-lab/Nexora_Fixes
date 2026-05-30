"use client";

import { useState } from "react";
import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CalendlyPopup from "@/components/Layout/CalendlyPopup";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function CtaButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg p-[1.5px] transition-transform hover:scale-105 active:scale-95",
        className
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-tertiary via-primary-2 to-secondary" />
      <span className="relative flex h-full w-full items-center justify-center rounded-lg bg-background px-6 text-sm font-medium text-white transition-colors hover:bg-transparent">
        Book a Free Consultation
      </span>
    </button>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Nexora Fixes home" className={cn("block", className)}>
      <Image
        src="/assets/logo.png"
        alt="Nexora Fixes"
        width={610}
        height={180}
        priority
        className="h-auto w-[150px] sm:w-[172px]"
      />
    </Link>
  );
}

function NavLink({
  item,
  active,
  mobile = false,
}: {
  item: (typeof navItems)[number];
  active: boolean;
  mobile?: boolean;
}) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-lg text-sm font-medium text-white/70 transition hover:text-white",
        active &&
          "bg-primary-1/5 text-white shadow-[inset_0_0_0_1px_rgba(255,122,0,0.088)]",
        mobile ? "block px-4 py-3 text-base" : "px-3 py-2"
      )}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [sheetState, setSheetState] = useState({
    pathname,
    open: false,
  });
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const isSheetOpen = sheetState.pathname === pathname && sheetState.open;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full">
      <div className="relative w-full bg-background/80 py-4 backdrop-blur-xl after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_18%,rgba(255,75,0,0.75)_44%,rgba(255,154,0,0.85)_50%,rgba(255,75,0,0.75)_56%,rgba(255,255,255,0.08)_82%,rgba(255,255,255,0.08)_100%)]">
        <div className="container flex items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} item={item} active={isActive(item.href)} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <CtaButton onClick={() => setIsCalendlyOpen(true)} />
          </div>

          <Sheet
            open={isSheetOpen}
            onOpenChange={(open) => setSheetState({ pathname, open })}
          >
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary-1/30 bg-bg-surface/80 text-white shadow-[0_0_24px_rgba(255,75,0,0.12)] transition hover:border-primary-1/50 hover:bg-bg-elevated lg:hidden"
              >
                <TbMenuDeep className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <Logo className="pr-12" />
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main Nexora Fixes navigation links and consultation button.
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile navigation" className="mt-8 grid gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <NavLink item={item} active={isActive(item.href)} mobile />
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-6">
                <SheetClose asChild>
                  <CtaButton
                    className="w-full"
                    onClick={() => setIsCalendlyOpen(true)}
                  />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CalendlyPopup
        open={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </header>
  );
}
