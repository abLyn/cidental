'use client'

import Logo from './Logo'

import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import PhoneSection from './PhoneSection'
import ThemeSwitcherBtn from './ThemeSwitcherBtn'
import { Button } from '../ui/button'

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
      <div className=" hidden md:flex md:sticky top-0 backdrop-blur-xl bg-background/80 items-center justify-between z-20 text-muted-foreground font-semibold  lg:text-sm xl:text-lg px-3 md:px-5 lg:px-10 2xl:px-80 lg:py-4">
        <Logo />

        <div className="hidden  lg:flex gap-4 2xl:gap-8 justify-end items-center">
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

        <div className="hidden lg:flex items-center gap-6 ">
          <ThemeSwitcherBtn />
          <Link href={'#'} className=" hover:text-primary flex gap-1">
            Sign in <LogIn />
          </Link>
          <Button className="hover:-translate-y-1 transition-all duration-300 border-primary ">
            Create an account
          </Button>
        </div>
      </div>

      {/*Mobile Navbar */}
      <div
        className={` block   lg:hidden shadow-sm justify-between bg-background/80 fixed top-0 w-full z-40 backdrop-blur-md    pt-3  animate-in fade-in zoom-in

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
