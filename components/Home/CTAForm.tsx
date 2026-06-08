"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2, Loader2, Mail } from "lucide-react";

import CalendlyPopup from "@/components/Layout/CalendlyPopup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const services = [
  "Digital Marketing",
  "Ads",
  "Shopify Store",
  "WordPress Website",
  "SEO",
  "Software Development",
  "Creatives Design",
  "Branding",
  "Book Keeping",
];

const trustPoints = [
  "We will respond to you within 12 hours",
  "Clear scope, timeline, and next steps",
  "Access to growth and development specialists",
];

const contactScriptUrl =
  "https://script.google.com/macros/s/AKfycbzde4mJG25OfsjXeOrT4ch-l6T7J7vwYqjYIJpu7jeCQmszdRFExn7aa35xpEjp2cgs/exec";

type FormErrors = {
  services?: string;
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9][0-9\s().-]{8,18}[0-9]$/;
const commonEmailTypos: Record<string, string> = {
  "gamil.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.con": "gmail.com",
};

const validateEmail = (email: string) => {
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  const normalizedEmail = email.toLowerCase();
  const [localPart, domain = ""] = normalizedEmail.split("@");

  if (commonEmailTypos[domain]) {
    return `Did you mean ${localPart}@${commonEmailTypos[domain]}?`;
  }

  if (domain === "gmail.com") {
    if (localPart.length < 6 || localPart.length > 30) {
      return "Gmail usernames are usually 6 to 30 characters long.";
    }

    if (!/^[a-z0-9.]+$/.test(localPart)) {
      return "Gmail addresses can only use letters, numbers, and dots before @gmail.com.";
    }

    if (localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..")) {
      return "Please check the dots in your Gmail address.";
    }
  }

  return "";
};

export default function CTAForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    services[0],
  ]);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleService = (service: string) => {
    if (isSubmitting) return;

    setSelectedServices((currentServices) =>
      currentServices.includes(service)
        ? currentServices.length === 1
          ? currentServices
          : currentServices.filter((selectedService) => selectedService !== service)
        : [...currentServices, service]
    );
    setErrors((currentErrors) => ({ ...currentErrors, services: undefined }));
  };

  const validateForm = (formData: FormData) => {
    const nextErrors: FormErrors = {};
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!selectedServices.length) {
      nextErrors.services = "Please select at least one service.";
    }

    if (name.length < 4) {
      nextErrors.name = "Name should be at least 4 characters.";
    }

    const emailError = validateEmail(email);
    if (emailError) nextErrors.email = emailError;

    if (!phonePattern.test(phone)) {
      nextErrors.phone =
        "Please enter a valid phone number with country code, e.g. +92 300 0000000.";
    }

    if (details && details.length < 10) {
      nextErrors.details = "Please add at least 10 characters or leave this empty.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setSubmitMessage("");

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    const payload = {
      services: selectedServices,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      details: String(formData.get("details") || "").trim(),
    };

    try {
      await fetch(contactScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      form.reset();
      setSelectedServices([services[0]]);
      setSubmitMessage(
        "Thanks For Your Inquiry. Nexora Team will get back to you within 12 hours."
      );
    } catch {
      setSubmitMessage(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-12 md:py-16">
      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-lg border border-secondary-2/20 bg-bg-elevated/50 shadow-[0_24px_100px_rgba(0,0,0,0.56)]">
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
                  href="mailto:nexorafixes@gmail.com"
                  className="inline-flex w-fit items-center gap-2 border-b border-secondary/65 pb-1 text-sm font-medium text-white transition hover:text-secondary"
                >
                  <Mail className="h-4 w-4 text-secondary display-p3" />
                  nexorafixes@gmail.com
                </a>

                <div>
                  <p className="max-w-[260px] display-p3 leading-7 text-white/78">
                    Always busy and want to book an exact time to call?
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsCalendlyOpen(true)}
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white/12 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary hover:text-black"
                  >
                    <CalendarCheck className="h-4 w-4 diplay-p3!" />
                    Book a free call
                  </button>
                </div>
              </div>
            </div>

            <form
              className="grid content-start gap-5"
              noValidate
              onSubmit={handleSubmit}
            >
              <div>
                <Label className="mb-2 block">Services</Label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        disabled={isSubmitting}
                        aria-pressed={isSelected}
                        className={cn(
                          "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                          isSelected
                            ? "border-primary-2 bg-gradient-to-r from-primary-2 to-secondary-2 text-black"
                            : "border-primary-2/30 bg-black/20 text-white hover:border-secondary/60",
                          isSubmitting && "cursor-not-allowed opacity-70"
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
                {errors.services && (
                  <p className="mt-2 text-xs font-medium text-primary-2">
                    {errors.services}
                  </p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Name*</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={cn(
                      "border-primary-2/30",
                      errors.name && "border-red-500/70"
                    )}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-xs font-medium text-primary-2">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2 block">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(
                      "border-primary-2/30",
                      errors.email && "border-red-500/70"
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-xs font-medium text-primary-2">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="mb-2 block">Phone number*</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+92 300 0000000"
                  disabled={isSubmitting}
                  onChange={() => {
                    setErrors((currentErrors) => ({
                      ...currentErrors,
                      phone: undefined,
                    }));
                  }}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={cn(
                    "border-primary-2/30",
                    errors.phone && "border-red-500/70"
                  )}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-xs font-medium text-primary-2">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="details" className="mb-2 block">Project details</Label>
                <Textarea
                  id="details"
                  name="details"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.details)}
                  aria-describedby={errors.details ? "details-error" : undefined}
                  className={cn(
                    "border-primary-2/30",
                    errors.details && "border-red-500/70"
                  )}
                  placeholder="Tell us what you need built, improved, or scaled."
                />
                {errors.details && (
                  <p id="details-error" className="mt-2 text-xs font-medium text-primary-2">
                    {errors.details}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold capitalize text-black transition hover:bg-primary-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {isSubmitting ? "Submitting..." : "Submit inquiry"}
              </button>
              {submitMessage && (
                <p className="text-[11px] ms-2 font-medium text-primary-2" aria-live="polite">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <CalendlyPopup
        open={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </section>
  );
}
