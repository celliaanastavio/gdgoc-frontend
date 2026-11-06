import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error:', error, info.componentStack)
  }

  handleReset = () => {
    this.setState({ error: null })
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div
        role="alert"
        className="mx-auto flex max-w-xl flex-col items-center gap-5 px-6 py-24 text-center"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-12 text-brand-red">
          <path
            d="M12 8.5v4.5M12 16.5h.01M10.3 4.1L2.9 17.2A2 2 0 004.6 20.2h14.8a2 2 0 001.7-3L13.7 4.1a2 2 0 00-3.4 0z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-3xl font-bold leading-[1.12] text-ink">Something went wrong</h2>
        <p className="text-base leading-[1.55] text-muted">
          An unexpected error occurred while displaying this page. You can try again or go
          back to the home page.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={this.handleReset}
            className="inline-flex h-12 items-center rounded-lg bg-brand-blue px-6 text-base font-medium text-white transition-colors hover:bg-[#3374e0]"
          >
            Try again
          </button>
          {/* <a> biasa (bukan Link) supaya memuat ulang dari awal */}
          <a
            href="/"
            className="inline-flex h-12 items-center rounded-lg border border-line px-6 text-base font-medium text-link transition-colors hover:bg-surface"
          >
            Back to home
          </a>
        </div>
      </div>
    )
  }
}