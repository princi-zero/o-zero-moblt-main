"use client";
// components/apply/AdditionalQuestionsSection.tsx
// ─────────────────────────────────────────────────────────────────
// Additional Questions section: Why ZeroMobIt (200 chars),
// Salary Expectations (numbers only), How did you hear.
// ─────────────────────────────────────────────────────────────────

import { Label, Textarea, FieldError, borderClass, inputBase } from "./FormPrimitives";
import type { FormState, FormErrors } from "@/types/apply";

interface Props {
  form: FormState;
  errors: FormErrors;
  setField: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  touchField: (key: keyof FormState) => void;
}

export function AdditionalQuestionsSection({
  form,
  errors,
  setField,
  touchField,
}: Props) {
  return (
    <div className="space-y-4">

      {/* Why ZeroMobIt — 200 chars */}
      <div>
        <Label htmlFor="whyZero" required>
          Why do you want to work at ZeroMobIt?
        </Label>
        <Textarea
          id="whyZero"
          placeholder="Share your motivation..."
          value={form.whyZeroMobIt}
          onChange={(v) => setField("whyZeroMobIt", v.slice(0, 200))}
          rows={3}
          required
          maxLength={200}
          error={errors.whyZeroMobIt}
        />
      </div>

      {/* Salary — numbers only, optional */}
      <div>
        <Label htmlFor="salary">
          Salary Expectations{" "}
          <span className="font-normal text-gray-400">(Optional)</span>
        </Label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">
            ₹
          </span>
          <input
            id="salary"
            type="text"
            inputMode="numeric"
            placeholder="1200000"
            value={form.salaryExpectation}
            onChange={(e) =>
              setField("salaryExpectation", e.target.value.replace(/\D/g, ""))
            }
            onBlur={() => touchField("salaryExpectation")}
            className={`${inputBase} pl-7 pr-3.5 ${borderClass(errors.salaryExpectation)}`}
          />
        </div>
        {form.salaryExpectation && (
          <p className="mt-1 text-xs text-gray-400">
            ₹{Number(form.salaryExpectation).toLocaleString("en-IN")} per annum
          </p>
        )}
        <FieldError msg={errors.salaryExpectation} />
      </div>

      {/* How did you hear */}
      <div>
        <Label htmlFor="howHeard" required>How did you hear about us?</Label>
        <select
          id="howHeard"
          value={form.howDidYouHear}
          onChange={(e) => setField("howDidYouHear", e.target.value)}
          onBlur={() => touchField("howDidYouHear")}
          required
          className={`${inputBase} bg-white ${borderClass(errors.howDidYouHear)}`}
        >
          <option value="">Select an option</option>
          <option value="linkedin">LinkedIn</option>
          <option value="twitter">Twitter / X</option>
          <option value="friend">Friend or colleague</option>
          <option value="website">ZeroMobIt website</option>
          <option value="college">College / Campus event</option>
          <option value="other">Other</option>
        </select>
        <FieldError msg={errors.howDidYouHear} />
      </div>
    </div>
  );
}