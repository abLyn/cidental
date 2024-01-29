'use client'

import { Button } from '../ui/button'
import Logo from './Logo'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import ThemeSwitcherBtn from './ThemeSwitcherBtn'
import PhoneSection from './PhoneSection'

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
      <div className="md:flex hidden md:sticky top-0 backdrop-blur-xl bg-secondary/80  px-3 md:px-5 lg:px-40 py-4 items-center justify-between z-20 text-muted-foreground text-xl  ">
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
        </div>

        <PhoneSection />
        <div>
          <ThemeSwitcherBtn />
          <Button
            variant="outline"
            className="hover:-translate-y-1 transition-all duration-300"
          >
            Sign in
          </Button>
        </div>
      </div>

      {/*Mobile Navbar */}
      <div
        className={` block   lg:hidden shadow-sm justify-between fixed top-0 w-full z-20 backdrop-blur-md   bg-muted/95 py-4  animate-in fade-in zoom-in

        `}
      >
        <div className="flex justify-between px-5 md:px-10">
          <Logo />
          <div className="flex  gap-[10px]">
            <MobileNav />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
