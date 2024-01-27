import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className=" lg:ml-0   ">
        <h1 className="  flex items-end   font-black tracking-tight group text-3xl  transition ease-in-out   hover:scale-105 duration-300  ">
          C<span className="   animate-bounce text-primary    ">i</span>
          <span className=" text-base text-foreground  underline decoration-4  -translate-y-2  ">
            dental
          </span>
        </h1>
      </Link>
    </div>
  )
}
