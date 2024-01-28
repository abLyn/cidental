import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className=" lg:ml-0   ">
        <h1 className="  flex items-end  text-primary font-medium tracking-tight group text-5xl  transition ease-in-out   hover:scale-105 duration-300  ">
          C
          <span className="   animate-bounce  text-muted-foreground   ">i</span>
          <span className=" hidden md:block text-xl	  underline decoration-8 decoration-primary underline-offset-4 -translate-y-3  ">
            dental
          </span>
          <span className=" hidden lg:block 	font-light text-muted-foreground  -translate-y-1 tracking-tighter ">
            group
          </span>
        </h1>
      </Link>
    </div>
  )
}
