import React from 'react'
import { Facebook, Github, Instagram, Twitter, Twitch } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const sections = [
  {
    title: 'Solutions',
    items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud'],
  },
  {
    title: 'Support',
    items: ['Pricing', 'Documentation', 'Guides', 'API Status'],
  },
  {
    title: 'Company',
    items: ['About', 'Blog', 'Jobs', 'Press', 'Partners'],
  },
  {
    title: 'Legal',
    items: ['Claims', 'Privacy', 'Terms', 'Policies', 'Conditions'],
  },
]

const items = [
  { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/' },
  { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/' },
  { name: 'Twitter', icon: Twitter, link: 'https://twitter.com/' },
  { name: 'Twitch', icon: Twitch, link: 'https://www.twitch.tv/' },
  { name: 'Github', icon: Github, link: 'https://github.com/' },
]

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-background text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <Input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <Button className="p-2 mb-4">Subscribe</Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return <x.icon key={index} className="hover:text-white" />
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
