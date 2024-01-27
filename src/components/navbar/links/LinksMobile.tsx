'use client'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { label: 'Accueil', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
]
const LinksMobile = () => {
  const pathname = usePathname()

  return (
    <>

    </>
  )
}

export default LinksMobile
