import type { ReactNode } from 'react'
import EmptyState from './EmptyState'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

interface Props<T> {
  data: T[] | null
  loading: boolean
  error: string | null
  onRetry: () => void
  children: (items: T[]) => ReactNode
}

export default function AsyncContent<T>({ data, loading, error, onRetry, children }: Props<T>) {
  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} onRetry={onRetry} />
  if (!data || data.length === 0) return <EmptyState />
  return <>{children(data)}</>
}