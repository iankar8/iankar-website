import Link from 'next/link'
import Image from 'next/image'

const CustomLink = (props: any) => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const CustomImage = (props: any) => {
  return (
    <div className="relative w-full h-64 my-8">
      <Image
        alt={props.alt}
        className="rounded-lg object-cover"
        fill
        {...props}
      />
    </div>
  )
}

const MDXComponents = {
  a: CustomLink,
  img: CustomImage,
  h1: (props: any) => (
    <h1 className="mt-8 mb-4 text-4xl font-bold font-playfair" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mt-8 mb-4 text-3xl font-bold font-playfair" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-8 mb-4 text-2xl font-bold font-playfair" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 ml-4 list-disc list-inside space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-4 ml-4 list-decimal list-inside space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="pl-4 my-4 border-l-4 border-gray-200 italic text-gray-700" 
      {...props} 
    />
  ),
  hr: () => <hr className="my-8 border-gray-200" />,
  strong: (props: any) => (
    <strong className="font-bold" {...props} />
  ),
  em: (props: any) => (
    <em className="italic" {...props} />
  ),
  code: (props: any) => (
    <code 
      className="px-1.5 py-0.5 mx-0.5 rounded bg-gray-100 font-mono text-sm" 
      {...props} 
    />
  ),
  pre: (props: any) => (
    <pre 
      className="p-4 my-4 rounded-lg bg-gray-900 text-white overflow-x-auto" 
      {...props} 
    />
  ),
}

export default MDXComponents
