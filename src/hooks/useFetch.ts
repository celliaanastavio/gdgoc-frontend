import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../config'
import type { ApiResponse } from '../types'

export function useFetch<T>(path: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const res = await fetch(`${API_BASE_URL}${path}`, {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error(`Failed to load data (${res.status})`)
        const json: ApiResponse<T> = await res.json()
        setData(json.data)
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(err instanceof Error ? err.message : 'Something went wrong')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [path, reloadKey])

  function refetch() {
    setLoading(true)
    setError(null)
    setReloadKey((k) => k + 1)
  }

  return { data, loading, error, refetch }
}
