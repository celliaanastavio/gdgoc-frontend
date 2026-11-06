interface Props {
  message?: string
}

export default function EmptyState({ message = 'Nothing to show yet.' }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 py-10 text-center text-muted">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-12">
        <path
          d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM8 10.5h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-base">{message}</p>
    </div>
  )
}