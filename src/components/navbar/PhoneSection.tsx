import React from 'react'
import { Button } from '../ui/button'
import { Phone } from 'lucide-react'

const PhoneSection = () => {
  return (
    <div>
      <Button size="icon" className=" mr-4 ">
        <Phone className="h-5 w-5" />
      </Button>
      (+213) 7 90 91 94 93
    </div>
  )
}

export default PhoneSection
