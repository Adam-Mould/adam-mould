import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

export function Logo({
  src,
  name,
  className,
}: {
  src?: ImageProps['src']
  name: string
  className?: string
}) {
  if (src) {
    return <Image src={src} alt="" className={className} unoptimized />
  }

  return (
    <span
      aria-hidden="true"
      className={clsx(
        className,
        'flex items-center justify-center text-[0.625rem] font-semibold tracking-wide text-zinc-500 dark:text-zinc-400',
      )}
    >
      {initials(name)}
    </span>
  )
}
