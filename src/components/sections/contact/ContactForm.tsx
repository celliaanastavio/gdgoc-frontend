import { useState, type FormEvent, type ReactNode } from 'react'
import type { InquiryCategory } from '../../../types'
import ArrowIcon from '../../ui/ArrowIcon'
import { ArrowUpRightGlyph } from '../../ui/InquiryGlyphs'

interface Props {
  categories: InquiryCategory[]
  categoryId: string
  onCategoryChange: (id: string) => void
}

interface Values {
  firstName: string
  lastName: string
  email: string
  organization: string
  subject: string
  message: string
  consent: boolean
}

type Errors = Partial<Record<'firstName' | 'email' | 'category' | 'subject' | 'message' | 'consent', string>>

const emptyValues: Values = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
  consent: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: Values, categoryId: string): Errors {
  const errors: Errors = {}
  if (!v.firstName.trim()) errors.firstName = 'First name is required.'
  if (!v.email.trim()) errors.email = 'Email address is required.'
  else if (!emailPattern.test(v.email)) errors.email = 'Please enter a valid email address.'
  if (!categoryId) errors.category = 'Please choose a category.'
  if (!v.subject.trim()) errors.subject = 'Subject is required.'
  if (!v.message.trim()) errors.message = 'Please tell us a little about your question.'
  if (!v.consent) errors.consent = 'Please agree before sending.'
  return errors
}

const inputBase =
  'w-full rounded-lg border bg-white px-4 text-[15px] placeholder:text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'

const inputClass = (hasError: boolean) =>
  `${inputBase} text-ink ${hasError ? 'border-brand-red' : 'border-line'}`

// Dropdown
const selectClass = (hasError: boolean) =>
  `${inputBase} text-muted ${hasError ? 'border-brand-red' : 'border-line'}`

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-brand-red">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm({ categories, categoryId, onCategoryChange }: Props) {
  const [values, setValues] = useState<Values>(emptyValues)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (status === 'success') setStatus('idle')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(values, categoryId)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    // API belum punya endpoint POST, jadi pengiriman disimulasikan
    await new Promise((resolve) => setTimeout(resolve, 800))
    setStatus('success')
    setValues(emptyValues)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex min-w-0 flex-1 flex-col gap-6 rounded-3xl bg-surface p-6 sm:p-9"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[30px] font-bold leading-[1.12] text-ink">Send us a message</h2>
        <ArrowUpRightGlyph className="size-[15.7px] overflow-visible text-link" />
      </div>
      <p className="text-[13px] text-muted">Fields marked * are required.</p>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
        <Field id="firstName" label="First name *" error={errors.firstName}>
          <input
            id="firstName"
            type="text"
            value={values.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            placeholder="Your first name"
            className={`${inputClass(!!errors.firstName)} h-[54px]`}
          />
        </Field>
        <Field id="lastName" label="Last name">
          <input
            id="lastName"
            type="text"
            value={values.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            placeholder="Your last name"
            className={`${inputClass(false)} h-[54px]`}
          />
        </Field>
      </div>

      <Field id="email" label="Email address *" error={errors.email}>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="Where we can reply to you"
          className={`${inputClass(!!errors.email)} h-[54px]`}
        />
      </Field>

      <Field id="organization" label="University / organization">
        <input
          id="organization"
          type="text"
          value={values.organization}
          onChange={(e) => update('organization', e.target.value)}
          placeholder="Where you study or work (optional)"
          className={`${inputClass(false)} h-[54px]`}
        />
      </Field>

      <Field id="category" label="Inquiry category *" error={errors.category}>
        <div className="relative">
          <select
            id="category"
            value={categoryId}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={`${selectClass(!!errors.category)} h-[54px] appearance-none pr-12`}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-link"
          >
            <path
              d="M3.95801 8.125L9.11634 13.2833C9.35072 13.5174 9.66842 13.6489 9.99967 13.6489C10.3309 13.6489 10.6486 13.5174 10.883 13.2833L16.0413 8.125"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Field>

      <Field id="subject" label="Subject *" error={errors.subject}>
        <input
          id="subject"
          type="text"
          value={values.subject}
          onChange={(e) => update('subject', e.target.value)}
          placeholder="A short introduction to your question"
          className={`${inputClass(!!errors.subject)} h-[54px]`}
        />
      </Field>

      <Field id="message" label="Your message *" error={errors.message}>
        <textarea
          id="message"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us a little about your question or idea…"
          className={`${inputClass(!!errors.message)} min-h-[146px] resize-none py-4`}
        />
      </Field>

    <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-5 text-muted">
            <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update('consent', e.target.checked)}
            className="peer sr-only"
            />
            <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`size-6 shrink-0 rounded peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-brand-blue ${
                errors.consent
                ? 'text-brand-red'
                : values.consent
                    ? 'text-brand-blue'
                    : 'text-[#5F6368]'
            }`}
            >
            <rect
                x="3.75"
                y="3.75"
                width="16.5"
                height="16.5"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill={values.consent ? 'currentColor' : 'none'}
            />
            {values.consent && (
                <path
                d="M8.25 12.25L10.9 14.9L15.9 9.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            )}
            </svg>
            I agree that the information I share can be used to respond to this inquiry.
        </label>
        {errors.consent && (
            <p role="alert" className="text-xs text-brand-red">
            {errors.consent}
            </p>
        )}
    </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-[52px] items-center justify-center gap-4 self-start whitespace-nowrap rounded-lg bg-brand-blue px-6 text-base font-medium text-white transition-colors hover:bg-[#3374e0] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <ArrowIcon />
        </button>
        <p className="text-xs leading-[1.5] text-muted sm:max-w-[230px]">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>

      {status === 'success' && (
        <p
          role="status"
          className="rounded-lg bg-tint-green px-4 py-3 text-sm font-medium text-ink"
        >
          Thanks for reaching out! We’ve received your message and will get back to you soon.
        </p>
      )}
    </form>
  )
}