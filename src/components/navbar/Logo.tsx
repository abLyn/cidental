import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className=" lg:ml-0   ">
        <h1 className="  flex items-end  group text-3xl  text-primary font-semibold transition ease-in-out   hover:scale-105 duration-300  ">
          Ci
          <span className=" text-foreground   ">dental</span>
          <span className=" text-foreground  animate-bounce text-2xl "></span>
        </h1>
      </Link>
    </div>
  )
}
