import Links from './links/Links'
import Logo from './Logo'
import { Button } from '../ui/button'
import { Phone } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      <div className="  animate-in fade-in zoom-in bg-white p-8">
        <div className="flex justify-between md:mx-[24rem] items-center">
          <Logo />
          <div className="hidden  lg:flex gap-10 ">
            <Links />
          </div>
          <div>
            <Button size="icon" className=" mr-4 ">
              <Phone className="h-4 w-4" />
            </Button>
            (+213)7 90 91 94 93
          </div>

          <Button className="hover:-translate-y-1 transition-all duration-300">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
