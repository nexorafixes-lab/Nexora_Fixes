"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2, Mail } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const services = [
  "Ads",
  "Ecommerce Website",
  "Software Development",
  "Shopify Store",
  "WordPress Website",
  "Creative Design",
];

const trustPoints = [
  "We will respond to you within 12 hours",
  "Clear scope, timeline, and next steps",
  "Access to growth and development specialists",
];

export default function CTAForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    services[0],
  ]);

  const toggleService = (service: string) => {
    setSelectedServices((currentServices) =>
      currentServices.includes(service)
        ? currentServices.filter((selectedService) => selectedService !== service)
        : [...currentServices, service]
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,154,0,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,154,0,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-lg border border-secondary-2/20 bg-[#0b121a] shadow-[0_24px_100px_rgba(0,0,0,0.56)]">
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-[630px] w-[630px] rounded-full bg-[radial-gradient(circle,rgba(255,176,0,0.45),rgba(255,122,0,0.18)_42%,transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,176,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,176,0,0.025)_1px,transparent_1px)] bg-[size:18px_18px]" />

          <div className="relative grid gap-8 p-5 sm:p-7 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="flex min-h-[380px] flex-col">
              <div>
                <h2 className="max-w-lg display-h3 font-black leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
                  Tell us about your project
                </h2>

                <div className="mt-5 grid gap-2">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-white/88">
                      <CheckCircle2 className="h-4 w-4 shrink-0 fill-secondary text-black" />
                      <span className="display-p3">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-1 flex-col justify-end gap-4 lg:mt-0">
                <a
                  href="mailto:hello@nexorafixes.com"
                  className="inline-flex w-fit items-center gap-2 border-b border-secondary/65 pb-1 text-sm font-semibold text-white transition hover:text-secondary"
                >
                  <Mail className="h-4 w-4 text-secondary display-p3" />
                  hello@nexorafixes.com
                </a>

                <div>
                  <p className="max-w-[260px] display-p3 leading-7 text-white/78">
                    Always busy and want to book an exact time to call?
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white/12 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary hover:text-black"
                  >
                    <CalendarCheck className="h-4 w-4 diplay-p3!" />
                    Book a free call
                  </a>
                </div>
              </div>
            </div>

            <form
              className="grid content-start gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <Label className="mb-2 block">Service</Label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        aria-pressed={isSelected}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                          isSelected
                            ? "border-primary-2 bg-primary-2 text-black"
                            : "border-white/14 bg-black/20 text-white hover:border-secondary/60"
                        )}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="hidden"
                  name="services"
                  value={selectedServices.join(", ")}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Name*</Label>
                  <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email*</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="mb-2 block">Phone number*</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" required />
              </div>

              <div>
                <Label htmlFor="details" className="mb-2 block">Project details</Label>
                <Textarea
                  id="details"
                  name="details"
                  placeholder="Tell us what you need built, improved, or scaled."
                />
              </div>

              <button
                type="submit"
                className="mt-1 capitalize h-11 rounded-full bg-white px-8 text-sm font-bold text-black transition hover:bg-primary-2"
              >
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
