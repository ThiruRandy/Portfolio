import React, { useState, useEffect } from 'react'

export default function VisitorBadge() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch('/api/visitors')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null))
  }, [])

  if (count === null) return null

  return (
    <div className="visitor-badge">
      <span className="dot" />
      <span>{count.toLocaleString()} visitors</span>
    </div>
  )
}
