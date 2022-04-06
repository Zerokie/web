import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex">
          <div className="-mx-6 w-full lg:w-2/5">
            <div className="px-6">
              <div>
                <Link
                  href="/"
                  className="text-xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                >
                  {siteMetadata.title}
                </Link>
              </div>

              <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
                Created with the goal of solving the problems of small and medium-sized brick and
                mortar stores
              </p>

              <div className="-mx-2 mt-4 ml-1 flex space-x-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
                <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                {/*
                <h3 className="uppercase text-gray-700 dark:text-white">Products</h3>
                <Link
                  href="https://zerokie.com"
                  className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
                >
                  Zerokie
                </Link>*/}
              </div>

              <div>
                <h3 className="uppercase text-gray-700 dark:text-white">About</h3>
                <Link
                  href="/company"
                  className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
                >
                  Company
                </Link>
              </div>

              <div>
                <h3 className="uppercase text-gray-700 dark:text-white">Blog</h3>
                <Link
                  href="/blog"
                  className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400"
                >
                  Articles
                </Link>
              </div>

              <div>
                <h3 className="uppercase text-gray-700 dark:text-white">Contact</h3>
                <span className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400">
                  +1 206 240 4016
                </span>
                <span className="mt-2 block text-sm text-gray-600 hover:underline dark:text-gray-400">
                  daniele@scopecreep.dev
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 h-px border-none bg-gray-300 dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            {`© ${new Date().getFullYear()}`}
            {` • `}
            {/*<Link href="/">{siteMetadata.title}</Link>*/}
            <Link href="https://scopecreep.dev">Scope Creep, LLC</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
