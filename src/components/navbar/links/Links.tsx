'use client'
import { usePathname, useRouter } from 'next/navigation'

import Link from 'next/link'

const Links = () => {
  const links = [
    { label: 'Accueil', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' },
  ]

  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route

        return (
          <Link
            href={link.route}
            key={link.label}
            className={` ${isActive && 'text-primary '}`}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export default Links

/*
{links.map((link) => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))} */
