import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  //throw new Error('Error in Home !!!')
  return (
    <main className="">
      <h1 className="text-3xl">Hello Chaffa</h1>
      <Button variant="outline">click me</Button>
    </main>
  )
}
