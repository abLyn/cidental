import { Button } from '../ui/button'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <div></div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
          Excellent Techniques For Healthy Dental Condition
        </p>
        <p className="text-[1.375rem] font-[500]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <Button className="shadow-none w-[10.125rem]">Get Started</Button>
          <div className="flex gap-[1.56rem] items-center">
            <img src="/asset/fancy_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal">Learn More</p>
            Button
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  )
}

export default HeroSection
