import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const links = [
  { label: 'Accueil', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
]

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight
          size={40}
          strokeWidth={3}
          absoluteStrokeWidth
          className="cursor-pointer animate-in fade-in zoom-in text-primary "
        />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8 mt-8 mx-4 ">
          {links.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route

            return (
              <Link
                href={link.route}
                key={link.label}
                className={`  px-0 block text-xl hover:text-primary transition-all ${
                  isActive && 'text-primary '
                }`}
              >
                <SheetClose className="focus:outline-none">
                  {link.label}
                </SheetClose>
              </Link>
            )
          })}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
