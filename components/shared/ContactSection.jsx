"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiPhone, FiMail, FiMapPin, FiShield, FiArrowRight, FiCheck, FiAlertCircle } from "react-icons/fi";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const channels = [
  { icon: FiPhone, label: "Call us", value: "0304 2024999", href: "tel:+923042024999" },
  { icon: FiMail, label: "Email us", value: "contact@accusenseadvisor.com", href: "mailto:contact@accusenseadvisor.com" },
  { icon: FiMapPin, label: "Visit us", value: "Lahore, Pakistan", href: null },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 – 18:00" },
  { day: "Saturday", time: "10:00 – 14:00" },
  { day: "Sunday", time: "Closed", closed: true },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
const panel = { hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function ContactSection() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const formData = new FormData(formRef.current);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        formRef.current.reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Couldn't send your message. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-26">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Left rail */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
          >
            <motion.span variants={item} className="eyebrow">
              Get in touch
            </motion.span>
            <motion.h2 variants={item} className="mb-3.5 mt-4 text-[clamp(1.9rem,3.4vw,2.5rem)]!">
              Reach us directly
            </motion.h2>
            <motion.p variants={item} className="mb-8.5 max-w-[38ch] text-[1.02rem] text-muted">
              No call centres, no ticket queues — you&apos;ll always speak to a real person on our team.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-3.5">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-accent">
                      <channel.icon className="h-5.5 w-5.5 text-white" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="mb-0.5 block text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                        {channel.label}
                      </span>
                      <span className="block text-[1.02rem] font-semibold text-[#1a1a1a]">{channel.value}</span>
                    </span>
                  </>
                );
                const className =
                  "group flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-4.5 transition-all duration-300 hover:-translate-y-0.75 hover:border-transparent hover:shadow-[0_20px_40px_-24px_rgba(26,26,26,0.28)]";

                return channel.href ? (
                  <a key={channel.label} href={channel.href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={channel.label} className={className}>
                    {content}
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={item} className="mt-6.5 rounded-xl border border-line bg-paper px-6 py-5.5">
              <h4 className="mb-3.5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                Office hours
              </h4>
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between border-b border-dashed border-line py-2 text-sm last:border-b-0"
                >
                  <span className="font-medium text-muted">{row.day}</span>
                  <span className={`font-semibold ${row.closed ? "text-accent" : "text-[#1a1a1a]"}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="relative mt-6.5 h-37.5 overflow-hidden rounded-xl border border-line"
            >
              <iframe
                src="https://www.google.com/maps?q=Lahore,Pakistan&z=12&output=embed"
                title="Accusense Advisor location — Lahore, Pakistan"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
                style={{ border: 0 }}
              />
              <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-2.5 py-1 text-xs font-semibold text-white shadow-[0_6px_16px_-4px_rgba(26,26,26,0.5)]">
                <FiMapPin className="h-3 w-3 text-accent" />
                Lahore, Pakistan
              </span>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={panel}
            className="relative overflow-hidden rounded-[18px] border border-line bg-white p-8 shadow-[0_40px_80px_-46px_rgba(26,26,26,0.35)] sm:p-11"
          >
            <span className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-75 flex-col items-center justify-center text-center"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <FiCheck className="h-6.5 w-6.5 text-accent" strokeWidth={2.2} />
                  </span>
                  <h3 className="mb-2 text-[1.5rem]!">Message sent</h3>
                  <p className="max-w-[34ch] text-[14.5px] font-medium text-muted">
                    Thanks for reaching out — we&apos;ll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <h3 className="mb-1.5 text-[1.5rem]!">Send us a message</h3>
                  <p className="mb-7.5 text-[14.5px] font-medium text-muted">
                    Fill in the form and we&apos;ll get back to you within one business day.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                    <input type="hidden" name="subject" value="New enquiry from the Accusense website" />
                    <input type="hidden" name="from_name" value="Accusense Advisor Website" />

                    <label className="flex flex-col gap-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">First name</span>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="First Name"
                        className="w-full rounded-[9px] border border-line bg-paper px-3.75 py-3.25 text-[15px] text-[#1a1a1a] transition-all duration-200 placeholder:text-[#1a1a1a]/35 focus:border-accent focus:bg-white focus:outline-none focus:ring-3 focus:ring-accent/10"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">Last name</span>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Last Name"
                        className="w-full rounded-[9px] border border-line bg-paper px-3.75 py-3.25 text-[15px] text-[#1a1a1a] transition-all duration-200 placeholder:text-[#1a1a1a]/35 focus:border-accent focus:bg-white focus:outline-none focus:ring-3 focus:ring-accent/10"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">Email address</span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-[9px] border border-line bg-paper px-3.75 py-3.25 text-[15px] text-[#1a1a1a] transition-all duration-200 placeholder:text-[#1a1a1a]/35 focus:border-accent focus:bg-white focus:outline-none focus:ring-3 focus:ring-accent/10"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">Phone (optional)</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="03XX XXX XXXX"
                        maxLength={11}
                        className="w-full rounded-[9px] border border-line bg-paper px-3.75 py-3.25 text-[15px] text-[#1a1a1a] transition-all duration-200 placeholder:text-[#1a1a1a]/35 focus:border-accent focus:bg-white focus:outline-none focus:ring-3 focus:ring-accent/10"
                      />
                    </label>
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">What can we help with?</span>
                      <select
                        name="service"
                        defaultValue="Accounting & Bookkeeping"
                        className="w-full rounded-[9px] border border-line bg-paper px-3.75 py-3.25 text-[15px] text-[#1a1a1a] transition-all duration-200 focus:border-accent focus:bg-white focus:outline-none focus:ring-3 focus:ring-accent/10"
                      >
                        <option>Accounting & Bookkeeping</option>
                        <option>Taxation Services</option>
                        <option>Corporate & Secretarial</option>
                        <option>Advisory Services</option>
                        <option>ERP Consultancy</option>
                        <option>Business Valuation</option>
                        <option>Something else</option>
                      </select>
                    </label>
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a1a]">Your message</span>
                      <textarea
                        name="message"
                        required
                        rows={10}
                        placeholder="Tell us a little about your business and what you need…"
                        className="min-h-32.5 w-full resize-y rounded-[9px] border border-line bg-paper px-3.75 py-3.25 text-[15px] text-[#1a1a1a] transition-all duration-200 placeholder:text-[#1a1a1a]/35 focus:border-accent focus:bg-white focus:outline-none focus:ring-3 focus:ring-accent/10"
                      />
                    </label>

                    {error && (
                      <div className="flex items-center gap-2 rounded-[9px] border border-accent/30 bg-accent/5 px-3.75 py-3 text-[13.5px] font-medium text-accent sm:col-span-2">
                        <FiAlertCircle className="h-4 w-4 shrink-0" />
                        {error}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-4.5 sm:col-span-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn inline-flex items-center gap-2.5 rounded bg-accent px-7 py-3.5 text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e11020] disabled:pointer-events-none disabled:opacity-60"
                      >
                        {submitting ? "Sending…" : "Send message"}
                        <FiArrowRight className="h-4 w-4" />
                      </button>
                      <span className="inline-flex items-center gap-2 text-[13px] font-medium text-muted">
                        <FiShield className="h-3.75 w-3.75 text-accent" />
                        Your details stay private.
                      </span>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
