"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_FORM_ID } from "@/lib/site";

const Req = () => (
  <span aria-hidden="true" className="text-forest">
    {" "}*
  </span>
);

const field =
  "mt-1.5 block w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-base text-carbon";

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <p
        role="status"
        className="rounded-card border border-line bg-paper p-6 text-base"
      >
        Thanks. We will reply within 1 working day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 text-left" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
            <Req />
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
            <Req />
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          <ValidationError field="email" prefix="Email" errors={state.errors} className="mt-1 block text-sm text-red-700" />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium">
            Company
            <Req />
          </label>
          <input id="company" name="company" type="text" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <input id="role" name="role" type="text" autoComplete="organization-title" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="problem" className="text-sm font-medium">
          Anything you would like us to know
        </label>
        <textarea id="problem" name="message" rows={3} className={field} />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="mt-1 block text-sm text-red-700" />
      </div>

      <p className="text-sm text-ink">
        <span aria-hidden="true" className="text-forest">
          *
        </span>{" "}
        Required
      </p>

      {/* Spam trap: hidden from people, bots tend to fill it in. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state.submitting} className="btn btn-primary">
          {state.submitting ? "Sending..." : "Send"}
        </button>
        <ValidationError errors={state.errors} className="text-sm text-red-700" />
      </div>
    </form>
  );
}
