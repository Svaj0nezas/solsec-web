import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="flex items-center">
        <h1 className="border-r border-black/30 pr-6 text-2xl font-medium leading-[49px] dark:border-white/30">
          404
        </h1>
        <div className="pl-6">
          <h2 className="text-sm font-normal leading-[49px]">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  )
}