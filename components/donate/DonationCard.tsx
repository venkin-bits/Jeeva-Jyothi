"use client";

import { useState } from "react";

/**
 * BUILD_BRIEF_DONATE_CARD.
 *
 * Causes: the same 2 locked causes from CausesIntervention.tsx on Home —
 * not new ones, not invented.
 *
 * Amount presets (₹500/₹1000/₹2500): PLACEHOLDER — illustrative suggested
 * amounts only, not locked figures; confirm with org if there are
 * preferred donation tiers.
 *
 * One-time/Monthly toggle: UI built, but NOT confirmed functional —
 * PLACEHOLDER pending confirmation with org on whether the eventual
 * payment gateway supports recurring donations.
 *
 * Submit button: per the brief, this must never fake a successful
 * donation. Chose the "clearly disabled, clearly labeled" approach over a
 * bare `#` link, since a disabled button with visible explanatory text is
 * more honest about non-functionality than a link that just goes nowhere.
 * The button stays disabled regardless of form validity — validity only
 * gates the inline error message, since submission itself has nothing to
 * validate toward yet (no gateway exists to receive a valid submission).
 */

const CAUSES = [
  "Safe Drinking Water",
  "Education For Economically Weaker Children",
] as const;

// PLACEHOLDER: suggested amounts — confirm with org if there are
// preferred donation tiers
const SUGGESTED_AMOUNTS = [500, 1000, 2500];

export function DonationCard() {
  const [cause, setCause] = useState<(typeof CAUSES)[number]>(CAUSES[0]);
  const [amount, setAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [touched, setTouched] = useState(false);

  const amountNumber = Number(amount);
  const isAmountValid = amount.trim() !== "" && amountNumber > 0;

  return (
    <div className="bg-cream border border-violet-300/40 rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-6 max-w-md w-full">
      {/* Cause selection — exactly the 2 locked causes, no additions */}
      <fieldset className="flex flex-col gap-3">
        <legend className="font-display font-semibold text-base text-ink mb-1">
          Choose a cause
        </legend>
        {CAUSES.map((c) => (
          <label
            key={c}
            className="focus-within:outline focus-within:outline-2 focus-within:outline-violet-500 focus-within:outline-offset-2 rounded-lg flex items-center gap-3 border border-violet-300/40 rounded-lg px-4 py-3 cursor-pointer"
          >
            <input
              type="radio"
              name="cause"
              value={c}
              checked={cause === c}
              onChange={() => setCause(c)}
              className="accent-violet-700"
            />
            <span className="font-body text-sm text-ink">{c}</span>
          </label>
        ))}
      </fieldset>

      {/* Amount */}
      <div className="flex flex-col gap-2">
        <label htmlFor="donation-amount" className="font-display font-semibold text-base text-ink">
          Amount
        </label>
        <div className="flex items-center gap-2 rounded-lg border border-violet-300/40 bg-lavender-50 px-4 py-3">
          <span className="font-body text-ink">₹</span>
          <input
            id="donation-amount"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={() => setTouched(true)}
            aria-invalid={touched && !isAmountValid}
            aria-describedby="donation-amount-error"
            className="focus-ring w-full bg-transparent font-body text-ink placeholder:text-muted outline-none"
          />
        </div>
        {touched && !isAmountValid && (
          <p id="donation-amount-error" className="font-body text-sm text-muted">
            Enter an amount greater than ₹0.
          </p>
        )}

        {/* PLACEHOLDER: suggested amounts — confirm with org if there are
            preferred donation tiers */}
        <div className="flex gap-2 mt-1">
          {SUGGESTED_AMOUNTS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setAmount(String(preset));
                setTouched(true);
              }}
              className="focus-ring rounded-lg border border-violet-300/40 text-sm font-body text-violet-700 px-3 py-1.5 hover:bg-violet-300/10"
            >
              ₹{preset}
            </button>
          ))}
        </div>
      </div>

      {/* One-time / Monthly toggle — UI only, not confirmed functional */}
      <div className="flex flex-col gap-2">
        <span className="font-display font-semibold text-base text-ink">
          Frequency
        </span>
        {/* PLACEHOLDER: confirm with org whether recurring donations are
            supported by their payment gateway — toggle is built but not
            wired to anything functional yet */}
        <div className="flex rounded-lg border border-violet-300/40 overflow-hidden w-fit">
          {(["one-time", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              aria-pressed={frequency === f}
              className={`focus-ring font-body text-sm px-4 py-2 ${
                frequency === f
                  ? "bg-violet-700 text-cream"
                  : "bg-transparent text-ink"
              }`}
            >
              {f === "one-time" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
      </div>

      {/* Submit — deliberately disabled, never fakes success */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="w-full rounded-lg bg-violet-700/40 text-cream font-display font-medium px-6 py-3 cursor-not-allowed"
        >
          Payment integration coming soon
        </button>
        <p className="font-body text-xs text-muted text-center">
          Donations aren&apos;t processed on this site yet — the payment
          gateway hasn&apos;t been confirmed.
        </p>
      </div>
    </div>
  );
}
