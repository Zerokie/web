import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function CompanyLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, youtube } =
    frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <section className="mb-16 block bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            So, what is <br /> <span className="text-primary-500">Zerokie</span>?
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-300">
            Zerokie is a new search engine that allows customers to find the products they want in
            the stores near them. So customers can easily find what they are looking for, and store
            owners get the support they need from their local community.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:gap-12">
            <div className="rounded-xl border border-r-gray-200 p-6 dark:border-gray-700">
              <div className="md:-mx-4 md:flex md:items-start">
                <span className="inline-block rounded-xl bg-primary-100 p-2 text-primary-500 dark:bg-white dark:text-white md:mx-4">
                  <Image
                    src="/static/images/inventory-management.svg"
                    alt="Inventory Management"
                    className="h-12 w-48"
                  />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium capitalize text-gray-700 dark:text-white">
                    Inventory Sync
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Currently we integrate with Shopify, but other integrations are on the way and
                    we plan on opening our API to developers too. What this means is that inventory
                    on Zerokie is automatically synchronized, so you don't need to spend time
                    updating your product listings!
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-r-gray-200 p-6 dark:border-gray-700">
              <div className="md:-mx-4 md:flex md:items-start">
                <span className="inline-block rounded-xl bg-primary-100 p-2 text-primary-500 dark:bg-white dark:text-white md:mx-4">
                  <Image
                    src="/static/images/download.svg"
                    alt="Inventory Management"
                    className="h-12 w-48"
                  />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium capitalize text-gray-700 dark:text-white">
                    Your data belongs to you
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    We respect our user's privacy - business owners and customers both. We do not
                    sell your data, and nobody will have access to it. The only exception to that is
                    what your customers will see when they search for your products.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-r-gray-200 p-6 dark:border-gray-700">
              <div className="md:-mx-4 md:flex md:items-start">
                <span className="inline-block rounded-xl bg-primary-100 p-2 text-primary-500 dark:bg-white dark:text-white md:mx-4">
                  <Image
                    src="/static/images/sales.svg"
                    alt="Inventory Management"
                    className="h-12 w-48"
                  />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium capitalize text-gray-700 dark:text-white">
                    Increase Sales
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Ever been looking for a specific thing but don't know which stores in your area
                    have it for sale? That's the same question your customers are asking themselves,
                    and what stops them from shopping at your store - they end up buying what they
                    are looking for online. Zerokie bridges that gap. Think Google Map for products
                    instead of places.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-r-gray-200 p-6 dark:border-gray-700">
              <div className="md:-mx-4 md:flex md:items-start">
                <span className="inline-block rounded-xl bg-primary-100 p-2 text-primary-500 dark:bg-white dark:text-white md:mx-4">
                  <Image
                    src="/static/images/make-happiness.svg"
                    alt="Inventory Management"
                    className="h-12 w-48"
                  />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-medium capitalize text-gray-700 dark:text-white">
                    A happier, healthier society!
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    We believe that a healthier society starts with the people around. We want to
                    give customers an easier way of supporting local businesses, and to make it
                    easier for businesses to support their local customers. We hope that will make
                    everyone a little bit happier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
