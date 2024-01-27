'use client'

import Logo from './Logo'
import { Button } from '../ui/button'
import { AlignRight, X } from 'lucide-react'
import { useState } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { label: 'Accueil', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      {/*Desktop Navbar */}
      <div className="flex md:sticky px-3 md:px-5 lg:px-40 py-4 items-center justify-between z-20 text-foreground ">
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

        <Button className="hover:-translate-y-1 transition-all duration-300">
          Sign in
        </Button>
      </div>

      {/*Mobile Navbar */}
      <div
        className={` block   lg:hidden shadow-sm justify-between fixed top-0 w-full z-[999] bg-white py-4  animate-in fade-in zoom-in

        ${menu ? ' bg-primary py-2' : ''}  `}
      >
        <div className="flex justify-between px-5 md:px-10">
          <Logo />
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-primary"
                onClick={toggleMenu}
              />
            ) : (
              <AlignRight
                className="cursor-pointer animate-in fade-in zoom-in text-primary"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-top  ">
            <div className="flex flex-col gap-8 mt-8 mx-4 items-center">
              {links.map((link) => {
                const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route

                return (
                  <Link
                    onClick={() => setMenu(false)}
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
              <Button className="hover:-translate-y-1 transition-all duration-300">
                Sign in
              </Button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default Navbar
