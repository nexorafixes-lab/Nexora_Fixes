"use client";

import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { TbCalendarEvent, TbX } from "react-icons/tb";

import { CALENDLY_URL } from "@/app/lib/config";

interface CalendlyPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function CalendlyPopup({ open, onClose }: CalendlyPopupProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/8 px-4 py-6 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close Calendly popup"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section className="relative z-10 flex h-[min(560px,78vh)] overflow-y-auto w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-primary-1/30 bg-black shadow-[0_0_90px_rgba(255,75,0,0.2)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,122,0,0.18),transparent_68%)]" />

        <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-secondary/35 bg-black text-secondary">
              <TbCalendarEvent className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">
                Book a Free Consultation
              </p>
              <p className="truncate text-xs text-white/55">
                Choose a time that works for you.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close Calendly popup"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:border-primary-1/45 hover:text-white"
          >
            <TbX className="h-5 w-5" />
          </button>
        </div>

        <div className="relative z-10 min-h-0 flex-1 bg-[#0f0a00] ">
          <InlineWidget
            url={CALENDLY_URL}
            styles={{
              height: "100%",
              minWidth: "100%",
            }}
            pageSettings={{
              backgroundColor: "#0f0a00",
              hideEventTypeDetails: false,
              hideGdprBanner: true,
              primaryColor: "#ffb000",
              textColor: "#ffffff",
            }}
          />
        </div>
      </section>
    </div>
  );
}
