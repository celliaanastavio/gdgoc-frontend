import { useState, type FormEvent, type ReactNode } from 'react'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import type { InquiryCategory } from '../../../types'
import ArrowIcon from '../../ui/ArrowIcon'
import { ArrowUpRightGlyph } from '../../ui/InquiryGlyphs'

interface Props {
  categories: InquiryCategory[]
  categoryId: string
  onCategoryChange: (id: string) => void
}

interface Draft {
  firstName: string
  lastName: string
  email: string
  organization: string
  subject: string
  message: string
}

type Errors = Partial<
  Record<'firstName' | 'email' | 'category' | 'subject' | 'message' | 'consent', string>
>

const DRAFT_STORAGE_KEY = 'gdgoc:contact-draft'

const emptyDraft: Draft = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(draft: Draft, consent: boolean, categoryId: string): Errors {
  const errors: Errors = {}
  if (!draft.firstName.trim()) errors.firstName = 'First name is required.'
  if (!draft.email.trim()) errors.email = 'Email address is required.'
  else if (!emailPattern.test(draft.email)) errors.email = 'Please enter a valid email address.'
  if (!categoryId) errors.category = 'Please choose a category.'
  if (!draft.subject.trim()) errors.subject = 'Subject is required.'
  if (!draft.message.trim()) errors.message = 'Please tell us a little about your question.'
  if (!consent) errors.consent = 'Please agree before sending.'
  return errors
}

const inputBase =
  'w-full rounded-lg border bg-white px-4 text-[15px] placeholder:text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'

const inputClass = (hasError: boolean) =>
  `${inputBase} text-ink ${hasError ? 'border-brand-red' : 'border-line'}`

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
  const [storedDraft, setDraft] = useLocalStorage<Draft>(DRAFT_STORAGE_KEY, emptyDraft)
  //
  const draft: Draft = { ...emptyDraft, ...storedDraft }

  // Persetujuan tidak disimpan: pengguna harus menyetujui ulang setiap kali mengirim
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const hasDraft = Object.values(draft).some(
    (value) => typeof value === 'string' && value.trim() !== '',
  )

  function clearSuccess() {
    if (status === 'success') setStatus('idle')
  }

  function updateField(field: keyof Draft, value: string) {
    setDraft((prev) => ({ ...emptyDraft, ...prev, [field]: value }))
    clearSuccess()
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(draft, consent, categoryId)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    // API belum memiliki endpoint POST
    await new Promise((resolve) => setTimeout(resolve, 800))
    setStatus('success')
    setDraft(emptyDraft)
    setConsent(false)
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
      <p className="text-[13px] text-muted">
        Fields marked * are required.
        {hasDraft && ' Your draft is saved on this device until you send it.'}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
        <Field id="firstName" label="First name *" error={errors.firstName}>
          <input
            id="firstName"
            type="text"
            value={draft.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            placeholder="Your first name"
            className={`${inputClass(!!errors.firstName)} h-[54px]`}
          />
        </Field>
        <Field id="lastName" label="Last name">
          <input
            id="lastName"
            type="text"
            value={draft.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            placeholder="Your last name"
            className={`${inputClass(false)} h-[54px]`}
          />
        </Field>
      </div>

      <Field id="email" label="Email address *" error={errors.email}>
        <input
          id="email"
          type="email"
          value={draft.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="Where we can reply to you"
          className={`${inputClass(!!errors.email)} h-[54px]`}
        />
      </Field>

      <Field id="organization" label="University / organization">
        <input
          id="organization"
          type="text"
          value={draft.organization}
          onChange={(e) => updateField('organization', e.target.value)}
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
          value={draft.subject}
          onChange={(e) => updateField('subject', e.target.value)}
          placeholder="A short introduction to your question"
          className={`${inputClass(!!errors.subject)} h-[54px]`}
        />
      </Field>

      <Field id="message" label="Your message *" error={errors.message}>
        <textarea
          id="message"
          value={draft.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell us a little about your question or idea…"
          className={`${inputClass(!!errors.message)} min-h-[146px] resize-none py-4`}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-5 text-muted">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              clearSuccess()
            }}
            className="peer sr-only"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`size-6 shrink-0 rounded peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-brand-blue ${
              errors.consent ? 'text-brand-red' : consent ? 'text-brand-blue' : 'text-[#5F6368]'
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
              fill={consent ? 'currentColor' : 'none'}
            />
            {consent && (
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
