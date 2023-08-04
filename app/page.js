'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState(0)

  const handleClick = () => {
    setNumber(number + 1)
  }


  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {number}
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}
