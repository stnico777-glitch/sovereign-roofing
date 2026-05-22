"use client";

import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  IconFileText,
  IconLayers,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from "@/components/icons/ThemeIcons";
import { useLocale } from "@/context/LocaleContext";
import { contactEmail } from "@/lib/site";

/** Nav icon (compass mark) as large faint watermark behind the form. */
function QuoteCardWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-[0.16]"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- same asset as header; decorative */}
      <img
        src="/sovereign-nav-logo.png"
        alt=""
        width={512}
        height={512}
        className="h-full w-full origin-center scale-[2.1] object-contain object-center sm:scale-[2.35]"
      />
    </div>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldShell({
  icon: Icon,
  variant,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  variant: "vision" | "footer";
  children: ReactNode;
}) {
  const shell =
    variant === "vision"
      ? "border-border bg-background/85"
      : "border-border bg-surface-muted";
  const iconWrap =
    variant === "vision"
      ? "border-accent/20 bg-pill-bg/80"
      : "border-accent/35 bg-accent/10";
  return (
    <div
      className={`flex min-h-[42px] items-center gap-2 rounded-full border pl-2 pr-1 transition focus-within:border-accent/45 focus-within:ring-1 focus-within:ring-accent/25 ${shell}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-accent ${iconWrap}`}
        aria-hidden
      >
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </div>
  );
}

const inputInnerVision =
  "min-w-0 flex-1 rounded-full border-0 bg-transparent py-2 pr-3 font-sans text-[13px] text-foreground outline-none ring-0 placeholder:text-muted focus:ring-0";

const inputInnerFooter =
  "min-w-0 flex-1 rounded-full border-0 bg-transparent py-2 pr-3 font-sans text-[13px] text-foreground outline-none ring-0 placeholder:text-foreground/45 focus:ring-0";

export type QuoteRequestFormProps = {
  variant: "vision" | "footer";
  /** Unique prefix for input ids when multiple forms exist on one page */
  idPrefix: string;
};

type SubmitState = "idle" | "sending" | "success" | "error";

/** FormSubmit fallback — must activate via email FormSubmit sends to the recipient address. */
const FORMSUBMIT_AJAX = "https://formsubmit.co/ajax";
/** Web3Forms (recommended): create a free key at https://web3forms.com and set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel. */
const WEB3FORMS_SUBMIT = "https://api.web3forms.com/submit";

function parseRemoteFormError(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  if (typeof d.message === "string" && d.message.trim()) return d.message.trim();
  const body = d.body;
  if (body && typeof body === "object") {
    const m = (body as Record<string, unknown>).message;
    if (typeof m === "string" && m.trim()) return m.trim();
  }
  return null;
}

function isTruthySuccess(value: unknown): boolean {
  if (value === true) return true;
  return String(value).toLowerCase() === "true";
}

function QuoteLoadingOverlay({
  variant,
  label,
}: {
  variant: "vision" | "footer";
  label: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-busy="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.35 }}
      className="absolute inset-0 z-[40] flex flex-col items-center justify-center gap-4 bg-background px-6 ring-1 ring-border"
    >
      <div
        className="h-11 w-11 rounded-full border-2 border-accent/25 border-t-accent motion-reduce:border-accent/60 motion-reduce:animate-none animate-spin"
        aria-hidden
      />
      <p
        className={
          variant === "vision"
            ? "font-sans text-sm font-medium tracking-wide text-slate-800"
            : "font-sans text-sm font-medium tracking-wide text-foreground/90"
        }
      >
        {label}
      </p>
    </motion.div>
  );
}

export function QuoteRequestForm({ variant, idPrefix }: QuoteRequestFormProps) {
  const { copy } = useLocale();
  const v = copy.vision;
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [projectType, setProjectType] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitErrorDetail, setSubmitErrorDetail] = useState<string | null>(null);

  const inputInner = variant === "vision" ? inputInnerVision : inputInnerFooter;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState("sending");
    setSubmitErrorDetail(null);

    const typeLabel =
      v.quoteProjectTypes.find((o) => o.value === projectType)?.label ??
      projectType;

    const messageBody = [
      `${copy.ui.quoteEmailName}: ${name}`,
      `${copy.ui.quoteEmailEmail}: ${email}`,
      `${copy.ui.quoteEmailPhone}: ${phone}`,
      `${copy.ui.quoteEmailZip}: ${zip}`,
      `${copy.ui.quoteEmailProjectType}: ${typeLabel || copy.ui.quoteEmailNotSelected}`,
      `${copy.ui.quoteEmailInbox}: ${contactEmail}`,
    ].join("\n");

    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

    try {
      if (web3Key) {
        const res = await fetch(WEB3FORMS_SUBMIT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: copy.ui.quoteEmailSubject,
            name,
            email,
            phone,
            zip,
            project_type: typeLabel || copy.ui.quoteEmailNotSelected,
            message: messageBody,
            replyto: email,
            from_name: name || "Sovereign Roofing lead",
            to_email: contactEmail,
            botcheck: "",
          }),
        });

        const data = await res.json().catch(() => null);
        if (res.ok && data && isTruthySuccess((data as { success?: unknown }).success)) {
          setSubmitState("success");
          setName("");
          setEmail("");
          setPhone("");
          setZip("");
          setProjectType("");
          return;
        }

        setSubmitErrorDetail(parseRemoteFormError(data) ?? null);
        setSubmitState("error");
        return;
      }

      const recipient = copy.contact.email.trim().toLowerCase();
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("phone", phone);
      fd.append("zip", zip);
      fd.append("project_type", typeLabel || copy.ui.quoteEmailNotSelected);
      fd.append("message", messageBody);
      fd.append("_subject", copy.ui.quoteEmailSubject);
      fd.append("_replyto", email);
      fd.append("_captcha", "false");

      const res = await fetch(`${FORMSUBMIT_AJAX}/${encodeURIComponent(recipient)}`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data != null && isTruthySuccess((data as { success?: unknown }).success)) {
        setSubmitState("success");
        setName("");
        setEmail("");
        setPhone("");
        setZip("");
        setProjectType("");
        return;
      }

      setSubmitErrorDetail(parseRemoteFormError(data) ?? null);
      setSubmitState("error");
    } catch {
      setSubmitState("error");
    }
  }

  const formBody = (
    <form
      onSubmit={handleSubmit}
      aria-busy={submitState === "sending"}
      onInput={() => {
        if (submitState === "success" || submitState === "error") {
          setSubmitState("idle");
          setSubmitErrorDetail(null);
        }
      }}
      className={
        variant === "vision"
          ? `relative z-10 flex w-full flex-col overflow-hidden px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-3.5 md:px-6 md:pb-6 md:pt-4 ${submitState === "sending" ? "min-h-[min(15rem,48vh)]" : ""}`
          : `relative z-10 flex w-full flex-col overflow-hidden px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 ${submitState === "sending" ? "min-h-[min(15rem,48vh)]" : ""}`
      }
    >
      {submitState === "sending" && (
        <QuoteLoadingOverlay
          variant={variant}
          label={`${copy.ui.quoteSubmitLoadingHint}…`}
        />
      )}
      <div
        className={
          variant === "vision"
            ? "mb-3 flex shrink-0 -translate-x-1 -translate-y-px items-center justify-center gap-2 border-b border-border pb-3 sm:-translate-x-1.5 sm:-translate-y-0.5"
            : "mb-4 flex shrink-0 items-center justify-center gap-2.5 border-b border-border pb-4"
        }
      >
        <span
          className={
            variant === "vision"
              ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-sm sm:h-10 sm:w-10"
              : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-accent shadow-[0_0_24px_rgba(178,30,41,0.18)]"
          }
          aria-hidden
        >
          <IconFileText
            className={
              variant === "vision"
                ? "h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5"
                : "h-5 w-5"
            }
          />
        </span>
        <div className="text-center">
          <h3
            className={
              variant === "vision"
                ? "font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground sm:text-[0.8125rem]"
                : "font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-foreground"
            }
          >
            {v.quoteFormTitle}
          </h3>
          {variant === "footer" && (
            <p className="mt-1.5 max-w-[18rem] font-sans text-xs leading-snug text-foreground/60">
              {copy.contact.quoteLead}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        <FieldShell icon={IconUser} variant={variant}>
          <label htmlFor={`${idPrefix}-name`} className="sr-only">
            {v.quoteFields.name}
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={v.quoteFields.name}
            className={inputInner}
          />
        </FieldShell>

        <FieldShell icon={IconMail} variant={variant}>
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            {v.quoteFields.email}
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={v.quoteFields.email}
            className={inputInner}
          />
        </FieldShell>

        <FieldShell icon={IconPhone} variant={variant}>
          <label htmlFor={`${idPrefix}-phone`} className="sr-only">
            {v.quoteFields.phone}
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={v.quoteFields.phone}
            className={inputInner}
          />
        </FieldShell>

        <FieldShell icon={IconMapPin} variant={variant}>
          <label htmlFor={`${idPrefix}-zip`} className="sr-only">
            {v.quoteFields.zip}
          </label>
          <input
            id={`${idPrefix}-zip`}
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder={v.quoteFields.zip}
            className={inputInner}
          />
        </FieldShell>

        <div>
          <FieldShell icon={IconLayers} variant={variant}>
            <label htmlFor={`${idPrefix}-project`} className="sr-only">
              {v.quoteProjectTypeLabel}
            </label>
            <div className="relative min-w-0 flex-1">
              <select
                id={`${idPrefix}-project`}
                name="projectType"
                required
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className={`${inputInner} w-full cursor-pointer appearance-none pr-8 py-2`}
              >
                {v.quoteProjectTypes.map((opt) => (
                  <option
                    key={opt.value || "placeholder"}
                    value={opt.value}
                    disabled={opt.value === ""}
                    className={
                      variant === "vision"
                        ? "bg-pill-bg text-foreground"
                        : "bg-background text-foreground"
                    }
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className={`pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 ${variant === "vision" ? "text-muted" : "text-foreground/45"}`}
              />
            </div>
          </FieldShell>
        </div>
      </div>

      {(submitState === "success" || submitState === "error") && (
        <motion.div
          key={submitState === "success" ? "ok" : "err"}
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: reduce ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={
            variant === "vision"
              ? `mt-3 font-sans text-[13px] leading-snug sm:text-sm ${submitState === "success" ? "text-emerald-800" : "text-red-700"}`
              : `mt-3 font-sans text-[13px] leading-snug sm:text-sm ${submitState === "success" ? "text-emerald-700" : "text-red-600"}`
          }
        >
          <p>
            {submitState === "success"
              ? copy.ui.quoteSubmitSuccess
              : copy.ui.quoteSubmitError}
          </p>
          {submitState === "error" && submitErrorDetail && (
            <p
              className={
                variant === "vision"
                  ? "mt-2 font-sans text-xs leading-snug text-red-800/90"
                  : "mt-2 font-sans text-xs leading-snug text-red-600/90"
              }
            >
              {submitErrorDetail}
            </p>
          )}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={submitState === "sending"}
        className={
          variant === "vision"
            ? "mt-3 w-full shrink-0 rounded-full bg-accent px-4 py-2.5 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent/90 enabled:cursor-pointer enabled:hover:bg-accent/90 disabled:cursor-wait disabled:opacity-70 sm:py-3"
            : "mt-4 w-full shrink-0 rounded-full bg-accent px-4 py-3 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_28px_rgba(178,30,41,0.35)] transition enabled:cursor-pointer enabled:hover:bg-accent/90 disabled:cursor-wait disabled:opacity-70"
        }
      >
        {submitState === "sending" ? copy.ui.quoteSubmitting : v.quoteCta}
      </button>
    </form>
  );

  if (variant === "footer") {
    return (
      <div className="relative w-full max-w-[min(100%,26rem)]">
        <div
          className="pointer-events-none absolute -inset-1 rounded-[1.125rem] bg-gradient-to-br from-accent/20 via-transparent to-accent/5 opacity-90 blur-md"
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_16px_48px_rgba(0,0,0,0.08)] ring-1 ring-border/60">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,rgba(178,30,41,0.1),transparent_55%)]"
            aria-hidden
          />
          <QuoteCardWatermark />
          {formBody}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[min(100%,38rem)] shrink-0 lg:mx-0 lg:mt-0 lg:ml-auto">
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/15 via-transparent to-transparent opacity-80 blur-sm"
        aria-hidden
      />
      <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-background shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
        <QuoteCardWatermark />
        {formBody}
      </div>
    </div>
  );
}
