export default function Spinner() {
  return (
    <div className="flex justify-center py-16">
      <div
        role="status"
        aria-label="Memuat"
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"
      />
    </div>
  )
}