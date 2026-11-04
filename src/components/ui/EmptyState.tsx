interface Props {
  message?: string
}

export default function EmptyState({ message = 'Belum ada data untuk ditampilkan.' }: Props) {
  return (
    <div className="py-16 text-center text-gray-500">
      <p className="text-4xl">📭</p>
      <p className="mt-2">{message}</p>
    </div>
  )
}