'use client'

import { useStore } from '@/stores/store'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState(0)

  const handleClick = () => {
    setNumber(number + 1)
  }

  const { zustandNumber, increment, decrement, reset } = useStore();


  return (
    <main className="">
      {number}
      <button onClick={handleClick}>Click me</button>
      <p>zustand number : {zustandNumber}</p>
      <button onClick={increment}>Increment</button>
    </main>
  )
}
