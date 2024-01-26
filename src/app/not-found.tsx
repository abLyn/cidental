import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>404 Not-found</h2>
      <p> sorry! the page you are looking for doesn&apos;t exist</p>
      <Link href="/"> back to home</Link>
    </div>
  )
}

export default NotFound
