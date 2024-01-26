import Link from 'next/link'

const Links = () => {
  const links = [
    { title: 'Accueil', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </>
  )
}

export default Links
