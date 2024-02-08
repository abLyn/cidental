import React from 'react'
import { Button } from '../ui/button'
import { Phone } from 'lucide-react'

const PhoneSection = () => {
  return (
    <>
      <div className="hidden lg:flex gap-4">
        <div className="relative flex h-7 w-7">
          <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-90"></div>
          <span className="relative inline-flex rounded-full h-max w-max  bg-primary text-secondary p-1 ">
            <Phone className="  h-5 w-5 " />
          </span>
        </div>
        (+213) 7 90 91 94 93
      </div>
    </>
  )
}

export default PhoneSection
