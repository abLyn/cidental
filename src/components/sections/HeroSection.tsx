import { Link } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="absolute w-full left-0 top-10 h-[600px] bg-[url('/assets/large-hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/20 sm:bg-transparent sm:from-white/20 sm:to-white ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className=" mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block  bg-gradient-to-r from-primary to-background bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {' '}
              Forever Home.{' '}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
