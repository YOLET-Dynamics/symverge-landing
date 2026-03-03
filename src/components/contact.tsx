"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/use-in-view";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
}

async function submitContactForm(data: ContactFormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? "Failed to send message.");
  }

  return res.json();
}

export function Contact() {
  const { ref, inView } = useInView();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const mutation = useMutation({
    mutationFn: submitContactForm,
  });

  return (
    <section id="contact" className="px-5 py-16 sm:px-6 sm:py-32">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-5xl ${inView ? "in-view" : ""}`}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-green sm:text-sm">
          Contact
        </span>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
          Got an idea? Let&apos;s make it{" "}
          <span className="text-brand-green">real.</span>
        </h2>

        <p className="mt-3 max-w-2xl text-base text-gray-400 sm:mt-4 sm:text-lg">
          Whether it&apos;s a napkin sketch or a full spec, we&apos;re
          ready to talk. No pitch decks required.
        </p>

        <div className="mt-8 grid gap-10 sm:mt-12 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            {mutation.isSuccess ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-brand-green/20 bg-brand-green/5 px-4 py-12 text-center sm:py-16">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-brand-green/10 sm:size-16">
                  <EnvelopeIcon className="size-7 text-brand-green sm:size-8" />
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  We got it.
                </h3>
                <p className="mt-2 max-w-xs text-sm text-gray-400 sm:text-base">
                  You&apos;ll hear from us soon. In the meantime, get excited,
                  good things are coming.
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:rounded-2xl sm:p-8">
                <form
                  onSubmit={handleSubmit((data) => mutation.mutate(data))}
                  className="space-y-5 sm:space-y-6"
                >
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute h-0 w-0 overflow-hidden opacity-0"
                    {...register("company")}
                  />
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-gray-300 sm:mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="h-11 border-white/10 bg-white/[0.05] text-white placeholder:text-gray-500 sm:h-12"
                        aria-invalid={!!errors.name}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-300 sm:mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="h-11 border-white/10 bg-white/[0.05] text-white placeholder:text-gray-500 sm:h-12"
                        aria-invalid={!!errors.email}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-300 sm:mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what you're building, what's broken, or what keeps you up at night..."
                      rows={5}
                      className="resize-none border-white/10 bg-white/[0.05] text-white placeholder:text-gray-500"
                      aria-invalid={!!errors.message}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {mutation.isError && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    className="w-full rounded-full bg-brand-green px-8 text-base font-semibold text-white hover:bg-brand-gold hover:text-[#0a0a0a] sm:w-auto"
                  >
                    {mutation.isPending
                      ? "Sending..."
                      : "Start the Conversation"}
                  </Button>
                </form>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 sm:size-10">
                <MapPinIcon className="size-4 text-brand-green sm:size-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white sm:text-base">Address</h4>
                <p className="mt-1 text-sm text-gray-400">
                  Laurel, Maryland
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 sm:size-10">
                <PhoneIcon className="size-4 text-brand-green sm:size-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white sm:text-base">Phone</h4>
                <a
                  href="tel:+15712356218"
                  className="mt-1 block text-sm text-gray-400 transition-colors hover:text-brand-green"
                >
                  (571) 235-6218
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 sm:size-10">
                <EnvelopeIcon className="size-4 text-brand-green sm:size-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white sm:text-base">Email</h4>
                <a
                  href="mailto:contact@symverge.tech"
                  className="mt-1 block text-sm text-gray-400 transition-colors hover:text-brand-green"
                >
                  contact@symverge.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
