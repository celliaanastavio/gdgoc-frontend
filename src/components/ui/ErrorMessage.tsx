interface Props {
  message: string
  onRetry?: () => void
}

export default function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p className="font-medium text-red-700">Oops, ada masalah</p>
      <p className="mt-1 text-sm text-red-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-full bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Coba lagi
        </button>
      )}
    </div>
  )
}