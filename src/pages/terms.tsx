import type { NextPage } from 'next'
import Link from 'next/link';

const Terms: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="/" passHref>
            <a className="text-blue-600" >
              LMA Art!
            </a>
          </Link>
        </h1>
      </main>
    </div>
  )
}

export default Terms
