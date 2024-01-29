'use client'

import Logo from './Logo'
import { Button } from '../ui/button'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MobileNav from './MobileNav'

const links = [
  { label: 'Accueil', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <>
      {/*Desktop Navbar */}
      <div className="flex md:sticky px-3 md:px-5 lg:px-40 py-4 items-center justify-between z-20 text-muted-foreground text-xl  ">
        <Logo />

        <div className="hidden  lg:flex gap-10 ">
          {links.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route

            return (
              <Link
                href={link.route}
                key={link.label}
                className={` px-0 block  hover:text-primary transition-all ${
                  isActive && 'text-primary '
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          S
        </div>

        <Button className="hover:-translate-y-1 transition-all duration-300">
          Sign in
        </Button>
      </div>

      {/*Mobile Navbar */}
      <div
        className={` block   lg:hidden shadow-sm justify-between fixed top-0 w-full z-20 bg-white py-4  animate-in fade-in zoom-in

        `}
      >
        <div className="flex justify-between px-5 md:px-10">
          <Logo />
          <div className="flex items-center gap-[40px]">
            <MobileNav />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
