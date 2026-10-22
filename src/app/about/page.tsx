import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { email, links, requestCvHref } from '@/lib/profile'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Adam Mould, a Principal Frontend Engineer in Milton Keynes. I’ve been building for the web since 2010.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-sm">
            <Image
              src={portraitImage}
              alt="Adam Mould sitting in a wooden armchair"
              sizes="(min-width: 1024px) 24rem, 20rem"
              className="aspect-4/5 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Adam Mould. I taught myself to code in 2010 and haven’t stopped
            shipping since.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My first products were two premium WordPress themes on
              ThemeForest. At their peak they sold around ten copies a day, and
              I looked after everything else as well: the listings,
              documentation, releases and customer support. It was my first
              taste of product engineering, before anyone was calling it that.
            </p>
            <p>
              I spent the next few years in agencies and in-house teams. I was
              the only developer at a six-person studio, then led a frontend
              team of ten at Xigen, where I ran regular teach-ins and brought
              React into the agency. At Office Depot I led the frontend rebuild
              of Viking Direct, a global eCommerce platform.
            </p>
            <p>
              In 2016 I co-founded Dream Digital, a multi-award-winning boutique
              agency, and spent nine years as its Technical Director. I set up
              its technical side from scratch and shipped more than fifty sites
              and applications for universities, agencies and startups, looking
              after everything from the database to the deploy.
            </p>
            <p>
              Today I’m the Principal Frontend Engineer at TransitionZero, a
              climate-tech non-profit, where I own the frontend of Scenario
              Builder. It’s an energy-systems modelling platform that handles
              millions of rows in the browser, with maps, charts and an AI
              assistant you can model with in plain English. Outside work I
              build my own products end to end, most recently A Legacy Beyond.
            </p>
            <p>
              I’ve gone all in on AI-first engineering, and I ship much faster
              for it. These days I spend more time designing how agents build
              than writing code myself.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={links.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={links.linkedin}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={links.email}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {email}
            </SocialLink>
          </ul>
          <Button href={requestCvHref} variant="secondary" className="mt-8">
            Request CV
          </Button>
        </div>
      </div>
    </Container>
  )
}
