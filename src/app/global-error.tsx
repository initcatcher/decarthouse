'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">문제가 발생했습니다!</h2>
          <p className="mt-4 text-lg">잠시 후 다시 시도해주세요.</p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => reset()}
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  )
}