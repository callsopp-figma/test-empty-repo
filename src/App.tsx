import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">GitHub connection QA</h1>
      <button
        onClick={() => setCount(c => c + 1)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        Count: {count}
      </button>
    </div>
  )
}
