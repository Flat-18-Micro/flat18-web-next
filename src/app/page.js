'use client'

import Test from '@/components/Test'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="body-contents-wrapper">
        <Test />
      </div>
    </main>
  )
}